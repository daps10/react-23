import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';

const Counter = () => {
  // to used to get selected state from the store.
  const counter= useSelector(state => state.counter);

  // dispatch return function
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({
      type: 'increment'
    })
  }

  const decrementHandler = () => {
    dispatch({
      type: 'decrement'
    })
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <div>
        <button onClick={ incrementHandler }>Increment</button>
        <button onClick={ decrementHandler }>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// export default Counter;
// class Counter1 extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{ this.props.counter }</div>
//         <div>
//           <button onClick={ this.incrementHandler.bind(this) }>Increment</button>
//           <button onClick={ this.decrementHandler.bind(this) }>Decrement</button>
//         </div>
//         <button onClick={ this.toggleCounterHandler }>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // mapstatetoptops for props
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// // mapstatetoptops for dispatch function
// const mapDispatchProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }

// connect is higher order function
// export default connect(mapStateToProps, mapDispatchProps)(Counter1);