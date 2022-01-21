import React from 'react';
import {GlobalStyle} from './globalStyles';
import Home from './pages/HomePage/Home';
import Dao from './pages/DAO/Dao';
import Metavers from './pages/Metaverse/Metaverse';
import SuperMarket from './pages/SuperMarket/Supermarket';
import Chain from './pages/Chain/Chain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
// import { FaConnectdevelop } from 'react-icons/fa';
import fav from './images/fav.svg';

import Helmet from 'react-helmet';
const TITLE = 'MetaverseDAO'

function App() {
  return (
    
    <Router>
      <Helmet>
        <title>{TITLE}</title>
        <meta name='a' content='a'/>
        <link rel='icon' type='image/x-icon' data-react-helmet="true" href={fav} sizes='16x16' />
      </Helmet>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Dao' exact component={Dao}/>
        <Route path='/Metaverse' exact component={Metavers} />
        <Route path='/SuperMarket' exact component={SuperMarket} />
        <Route path='/Chain'  exact component={Chain} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
