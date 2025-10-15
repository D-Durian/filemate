import express from 'express';
import bodyParser from 'body-parser';
import { documentRouter } from './api/documents';
import syncRouter from './api/sync';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(bodyParser.json());
app.use('/api/documents', documentRouter);
app.use('/api/sync', syncRouter);

app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});