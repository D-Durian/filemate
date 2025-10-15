import { useState } from 'react';
import SyncManager from './components/SyncManager';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>filemate - React + Vite</h1>
      <p>Spielwiese zum Lernen. Zähler: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <hr style={{ margin: '24px 0' }} />
      <SyncManager />
    </div>
  );
}