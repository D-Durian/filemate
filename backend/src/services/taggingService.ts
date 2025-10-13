import { Document } from '../models/documentModel';

export class TaggingService {
    private tags: Map<string | number, string[]>;

    constructor() {
        this.tags = new Map();
    }

    public addTag(documentId: string | number, tag: string): void {
        if (!this.tags.has(documentId)) {
            this.tags.set(documentId, []);
        }
        const documentTags = this.tags.get(documentId);
        if (documentTags && !documentTags.includes(tag)) {
            documentTags.push(tag);
        }
    }

    public removeTag(documentId: string | number, tag: string): void {
        const documentTags = this.tags.get(documentId);
        if (documentTags) {
            this.tags.set(documentId, documentTags.filter(t => t !== tag));
        }
    }

    public getTags(documentId: string | number): string[] {
        return this.tags.get(documentId) || [];
    }

    public tagDocument(document: Document, tags: string[]): void {
        tags.forEach(tag => this.addTag(document.id, tag));
    }
}