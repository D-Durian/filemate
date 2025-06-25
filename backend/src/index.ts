import express from 'express';
import bodyParser from 'body-parser';
import { documentRouter } from './api/documents';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/documents', documentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});