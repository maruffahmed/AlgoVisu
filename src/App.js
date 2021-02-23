import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import BubbleSort from 'components/Bubble/BubbleSort';

function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/bubble" />
        </Route>
        <Route path="/bubble" component={BubbleSort} />
      </Switch>
    </div>
  );
}

export default App;
