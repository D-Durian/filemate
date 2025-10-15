import express from 'express';
import { syncService } from '../services/syncService';

const router = express.Router();

let lastReport: any = null;

router.post('/locations', (req, res) => {
  const { path } = req.body;
  if (!path) return res.status(400).json({ error: 'path required' });
  const locs = syncService.registerLocation(path);
  res.json({ locations: locs });
});

router.get('/locations', (req, res) => {
  res.json({ locations: syncService.listLocations() });
});

router.post('/', async (req, res) => {
  try {
    const r = await syncService.syncAll();
    lastReport = r;
    res.json(r);
  } catch (err: any) {
    res.status(500).json({ error: String(err && err.message ? err.message : err) });
  }
});

router.get('/last', (req, res) => {
  res.json({ report: lastReport });
});

export default router;
