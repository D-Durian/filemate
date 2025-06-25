import React from 'react';
import DocumentList from './components/DocumentList';

const App: React.FC = () => {
    return (
        <div>
            <h1>Document Management System</h1>
            <DocumentList />
        </div>
    );
};

export default App;