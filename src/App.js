import React from 'react';
import './App.css';
import Tickers from './Components/Tickers'

function App() {



return (
  <div className="App">
      <div className = "App-header">
           <h2>Cryptocurrency Tickers</h2>
      </div>
      <Tickers/>
  </div>
  );
}

export default App;
