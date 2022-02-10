import { Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';  // We can use useStore too 
import classes from './Counter.module.css';

// const Counter = () => {

//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);  // Subscription set remove p
//   const toggleCounterHandler = () => { };

//   const incrementHandler = () => {
//     if (counter < 10) {
//       dispatch({ type: 'increment' });
//     }
//   };

//   const decrementHandler = () => {
//     if (counter) {
//       dispatch({ type: 'decrement' });
//     }
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler} >Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {

  incrementHandler() {
    if (this.props.counter < 10) {
      this.props.increment();
    }
  };

  decrementHandler() {
    if (this.props.counter) {
      this.props.decrement();
    }
  };
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)} >Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}

// use selector 
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
