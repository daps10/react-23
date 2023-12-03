import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

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
