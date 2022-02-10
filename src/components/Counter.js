import { useDispatch, useSelector } from 'react-redux';  // We can use useStore too 
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);  // Subscription set remove p
  const toggleCounterHandler = () => { };

  const incrementHandler = () => {
    if (counter < 10) {
      dispatch({ type: 'increment' });
    }
  };

  const decrementHandler = () => {
    if (counter) {
      dispatch({ type: 'decrement' });
    }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
