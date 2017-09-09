import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.css';

import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Content from '../../components/shared/Content';

import Home from '../../container/Home/Home';
import Start from '../../container/Category/Start';

const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/basla" component={Start} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
