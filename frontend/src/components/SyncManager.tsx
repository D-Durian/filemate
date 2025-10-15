import React, { useEffect, useState } from 'react';

type Location = { id?: string; path: string };

export default function SyncManager() {
  const [locations, setLocations] = useState<string[]>([]);
  const [path, setPath] = useState('');
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    fetch('/api/sync/locations').then(r => r.json()).then(d => setLocations(d.locations || []));
  }, []);

  const add = async () => {
    if (!path) return;
    const res = await fetch('/api/sync/locations', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ path }) });
    const d = await res.json();
    setLocations(d.locations || []);
    setPath('');
  };

  const run = async () => {
    setReport(null);
    const r = await fetch('/api/sync', { method: 'POST' }).then(r => r.json());
    setReport(r);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Sync Manager</h2>
      <div>
        <input value={path} onChange={e => setPath(e.target.value)} placeholder="Path (container path)" style={{ width: 400 }} />
        <button onClick={add} style={{ marginLeft: 8 }}>Add</button>
      </div>
      <div style={{ marginTop: 12 }}>
        <h3>Locations</h3>
        <ul>
          {locations.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </div>
      <div style={{ marginTop: 12 }}>
        <button onClick={run}>Run Sync</button>
      </div>
      {report && (
        <div style={{ marginTop: 12 }}>
          <h3>Report</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(report, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
