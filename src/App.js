import './App.css';
import Members from "./Members";
import Home from './components/Home';
import Customer from './pages/Customer';
import Company from './pages/Company';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        
        <Switch>

          <Route exact path="/">
            <Home members={Members} />
          </Route>

          <Route path="/Customer/:id">
            <Customer members={Members} />
          </Route>

          <Route path="/Company/:id">
            <Company members={Members} />
          </Route>

        </Switch>
      </main>


      
    </div>
  );
}

export default App;
