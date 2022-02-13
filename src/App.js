import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store /ui-slice';
import Notification from './components/UI/Notificaton';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {

    dispatch(uiActions.showNotifications({
      status: 'pending',
      title: 'sending...',
      message: 'Sending cart data'
    }));

    const sendCartData = async () => {
      const response = await fetch('https://react-http-de395-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(uiActions.showNotifications({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully'
      }));
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotifications({
        status: 'error',
        title: 'error',
        message: 'Sent cart data failed'
      }));
    });

  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
