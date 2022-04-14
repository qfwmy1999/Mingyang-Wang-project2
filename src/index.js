import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Rule from './Rule';
import Game from './Game';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { WordleProvider } from './context/Wordle'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <WordleProvider>
        <header className="header text-center">
          <strong>WORDLE</strong>
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/rule" element={<Rule />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </WordleProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
