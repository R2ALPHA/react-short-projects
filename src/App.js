import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
