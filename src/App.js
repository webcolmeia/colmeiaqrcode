import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Layout/Heager';
import Footer from './Layout/Footer';

function App() {
  return (
    <HashRouter>
        <Header />
        <Routes />
        <Footer />
    </HashRouter>
  );
}

export default App;
