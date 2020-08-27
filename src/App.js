import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Layout/Heager';
import Footer from './Layout/Footer';
import { General } from './Components/General';
import { Content } from './Components/Content';

function App() {
  return (
    <HashRouter>
        <General>
            <Header />
            <Content>
                <Routes />
            </Content>
            <Footer />
        </General>
    </HashRouter>
  );
}

export default App;
