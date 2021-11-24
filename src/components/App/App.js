import React from 'react';
import './App.scss';
import { Header } from "../Header/Header";
import { AppRouter } from '../AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "../../store/"


function App() {

  return (
    < Provider store={store}>
      <PersistGate persistor={persistor}>

        <div className="app">
          <BrowserRouter>
            <Header />
            <AppRouter />
          </BrowserRouter>
        </div>

      </PersistGate>
    </Provider>

  );
}

export default App;
