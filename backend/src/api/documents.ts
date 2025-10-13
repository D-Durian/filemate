import express, { Request, Response } from 'express';

export const documentRouter = express.Router();

// Mock database for documents
let documents: any[] = [];

// Create a new document
documentRouter.post('/', (req: Request, res: Response) => {
    const { title, content } = req.body;
    const newDocument = { id: documents.length + 1, title, content };
    documents.push(newDocument);
    res.status(201).json(newDocument);
});

// Retrieve all documents
documentRouter.get('/', (req: Request, res: Response) => {
    res.json(documents);
});

// Retrieve a document by ID
documentRouter.get('/:id', (req: Request, res: Response) => {
    const document = documents.find(doc => doc.id === parseInt(req.params.id));
    if (document) {
        res.json(document);
    } else {
        res.status(404).send('Document not found');
    }
});

// Update a document by ID
documentRouter.put('/:id', (req: Request, res: Response) => {
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
documentRouter.delete('/:id', (req: Request, res: Response) => {
    const documentIndex = documents.findIndex(doc => doc.id === parseInt(req.params.id));
    if (documentIndex !== -1) {
        documents.splice(documentIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Document not found');
    }
});
