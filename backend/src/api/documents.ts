import express, { Request, Response } from 'express';

const router = express.Router();

// Mock database for documents
let documents: any[] = [];

// Create a new document
router.post('/documents', (req: Request, res: Response) => {
    const { title, content } = req.body;
    const newDocument = { id: documents.length + 1, title, content };
    documents.push(newDocument);
    res.status(201).json(newDocument);
});

// Retrieve all documents
router.get('/documents', (req: Request, res: Response) => {
    res.json(documents);
});

// Retrieve a document by ID
router.get('/documents/:id', (req: Request, res: Response) => {
    const document = documents.find(doc => doc.id === parseInt(req.params.id));
    if (document) {
        res.json(document);
    } else {
        res.status(404).send('Document not found');
    }
});

// Update a document by ID
router.put('/documents/:id', (req: Request, res: Response) => {
    const documentIndex = documents.findIndex(doc => doc.id === parseInt(req.params.id));
    if (documentIndex !== -1) {
        const { title, content } = req.body;
        documents[documentIndex] = { id: parseInt(req.params.id), title, content };
        res.json(documents[documentIndex]);
    } else {
        res.status(404).send('Document not found');
    }
});

// Delete a document by ID
router.delete('/documents/:id', (req: Request, res: Response) => {
    const documentIndex = documents.findIndex(doc => doc.id === parseInt(req.params.id));
    if (documentIndex !== -1) {
        documents.splice(documentIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Document not found');
    }
});

export default router;