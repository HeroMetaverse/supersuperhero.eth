import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
// import Services from './pages/Services/Services';
// import Products from './pages/Products/Products';
import Dao from './pages/DAO/Dao';
import Metavers from './pages/Metaverse/Metaverse';
import SuperMarket from './pages/SuperMarket/Supermarket';
import Chain from './pages/Chain/Chain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
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
