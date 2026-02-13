import React from 'react';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Discord Server Roles Manager</h1>
        <p>Manage and configure your Discord server roles</p>
      </header>
      
      <main className="app-main">
        <div className="roles-section">
          <h2>Server Roles</h2>
          <p>Configure your server roles here</p>
        </div>
      </main>
    </div>
  );
};

export default App;
