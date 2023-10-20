import CounterPage from "./pages/CounterPage";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/counter' component={CounterPage}/>
      <Route path='*' component={NotFoundPage} />
    </Switch>
  );
}

export default App;
