import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/:categorySlug" component={ProductList} />
        <Route path="/:id/:slug" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;