import CounterPage from "./pages/CounterPage";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from 'react-redux';
import cx from 'classnames';
import CONSTANTS from './constants';
import styles from './components/Header/Header.module.scss';

const { THEMES } = CONSTANTS;

function App() {
  const theme = useSelector((state) => state.theme);

  const className = cx({
      [styles.darkTheme]: theme === THEMES.DARK,
      [styles.lightTheme]: theme === THEMES.LIGHT
  })

  return (
    <div className={className}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/counter' component={CounterPage}/>
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </div>

  );
}

export default App;
