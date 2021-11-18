import React from 'react';
import './App.scss';
import { Header } from "../Header/Header";
import { AppRouter } from '../AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "../../store/"


function App() {

  return (
    < Provider store={store}>

      <div className="app">
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </div>

    </Provider>

  );
}

export default App;
