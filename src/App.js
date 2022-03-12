import React from 'react'
import { Header } from "./components/Header";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import { ProductosList } from 'components/page/productos';

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Pages />
      <ProductosList></ProductosList>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
