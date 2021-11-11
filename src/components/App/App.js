import React from 'react';
import './App.scss';
import { Header } from "../Header/Header";
import { AppRouter } from '../AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
