import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import userProfile from './components/UserProfile';
import UserProfile from './components/UserProfile';

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
      {isAuth && <UserProfile />}
    </Fragment>
  );
}

export default App;
