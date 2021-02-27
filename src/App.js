import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import BubbleSort from 'components/Bubble/BubbleSort';
import Insertion from 'components/Insertion/Insertion';
import Merge from 'components/Merge/Merge';
import Quick from 'components/Quick/Quick';

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/bubble" />
        </Route>
        <Route path="/bubble" component={BubbleSort} />
        <Route path="/insertion" component={Insertion} />
        <Route path="/quick" component={Quick} />
        <Route path="/merge" component={Merge} />
      </Switch>
    </div>
  );
}

export default App;
