import * as React from 'react';
import './style.css';

import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import AllContacts from './Pages/AllContacts';
import AddContacts from './Pages/AddContacts';
import MyFavorites from './Pages/MyFavorites';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AllContacts />
        </Route>
        <Route path="/add-contacts">
          <AddContacts />
        </Route>
        <Route path="/my-favorites">
          <MyFavorites />
        </Route>
      </Switch>
    </div>
  );
}
