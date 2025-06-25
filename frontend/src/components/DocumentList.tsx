import React, { useEffect, useState } from 'react';

const DocumentList: React.FC = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await fetch('/api/documents');
                const data = await response.json();
                setDocuments(data);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div>
            <h1>Document List</h1>
            <ul>
                {documents.map((document) => (
                    <li key={document.id}>
                        <h2>{document.title}</h2>
                        <p>{document.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentList;