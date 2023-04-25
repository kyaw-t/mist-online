import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        build: 0.0.1
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="x" element={<>x</>} />
                <Route path="y" element={<>y</>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
