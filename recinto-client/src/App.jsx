import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Application!</h1>
        
        <div className="profile-info">
          <p>
            <strong>Name:</strong> Rafael Alexis P. Recinto<br />
            <strong>Email:</strong> yndraking@gmail.com<br />
            <strong>GitHub Repository:</strong>
          </p>
          
          <div className="links">
            <a 
              href="https://github.com/recintorp/recinto-webprog.git" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View My WebProg Project
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;