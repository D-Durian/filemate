import { promises as fs } from 'fs';
import path from 'path';

export type FileEntry = {
  relativePath: string;
  fullPath: string;
  mtimeMs: number;
  size: number;
};

export class SyncService {
  locations: string[] = [];

  registerLocation(p: string) {
    if (!this.locations.includes(p)) this.locations.push(p);
    return this.locations;
  }

  listLocations() {
    return this.locations;
  }

  async scanLocation(root: string): Promise<Map<string, FileEntry>> {
    const map = new Map<string, FileEntry>();

    const walk = async (dir: string) => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(dir, e.name);
        const rel = path.relative(root, full);
        if (e.isDirectory()) {
          await walk(full);
        } else if (e.isFile()) {
          try {
            const st = await fs.stat(full);
            map.set(rel, { relativePath: rel, fullPath: full, mtimeMs: st.mtimeMs, size: st.size });
          } catch (err) {
            // ignore
          }
        }
      }
    };

    await walk(root);
    return map;
  }

  async syncAll(): Promise<any> {
    const locations = this.locations.slice();
    const scans: Array<Map<string, FileEntry>> = [];
    for (const loc of locations) {
      scans.push(await this.scanLocation(loc));
    }

    // Collect union of paths
    const allPaths = new Set<string>();
    for (const m of scans) for (const k of m.keys()) allPaths.add(k);

    const report: { added: string[]; updated: string[]; skipped: string[]; errors: string[] } = { added: [], updated: [], skipped: [], errors: [] };

    // For each path, find newest version and copy to others
    for (const rel of allPaths) {
      // find newest
      let newest: FileEntry | null = null;
      for (const m of scans) {
        const e = m.get(rel);
        if (!e) continue;
        if (!newest || e.mtimeMs > newest.mtimeMs) newest = e;
      }
      if (!newest) continue;

      // ensure each location has newest
      for (let i = 0; i < locations.length; i++) {
        const loc = locations[i];
        const target = path.join(loc, rel);
        const targetDir = path.dirname(target);
        try {
          // does it exist?
          let needCopy = false;
          try {
            const st = await fs.stat(target);
            if (st.mtimeMs < newest.mtimeMs || st.size !== newest.size) needCopy = true;
          } catch (err) {
            needCopy = true; // doesn't exist
          }

          if (needCopy) {
            await fs.mkdir(targetDir, { recursive: true });
            await fs.copyFile(newest.fullPath, target);
            // preserve mtime
            await fs.utimes(target, new Date(), new Date(newest.mtimeMs));
            report.updated.push(`${rel} -> ${loc}`);
          } else {
            report.skipped.push(`${rel} in ${loc}`);
          }
        } catch (err: any) {
          report.errors.push(`${rel} -> ${loc}: ${String(err && err.message ? err.message : err)}`);
        }
      }
    }

    return { locations, report };
  }
}

export const syncService = new SyncService();
