import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainBoard from './pages/MainBoard';
import MainPage from './pages/MainPage';
import PageFrame from './components/PageFrame';
import Register from './pages/Register';
import PageHeader from './components/PageHeader';



function App() {
  return (
    <PageFrame>
      <PageHeader></PageHeader>
      <BrowserRouter>
        <Switch>
          <Route path='/main' exact component={MainBoard}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Route path='/' exact component={MainPage}></Route>
        </Switch>
      </BrowserRouter>
    </PageFrame>
  );
}

export default App;
