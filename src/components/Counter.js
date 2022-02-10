import { useSelector } from 'react-redux';  // We can use useStore too 
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);  // Subscription set remove p
  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
