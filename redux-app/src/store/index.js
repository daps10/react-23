// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import authReducer from './auth.slice';

// counter reducer
// const counterReducer = (
//   state= initialState, 
//   action
// ) => {
//   if(action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if(action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }
//   if(action.type === 'decrement') {
//     return  {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if(action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;
// }

// store where reducer put.
// const store = createStore(counterReducer);

// store with slice
// const store = createStore(
//   counterSlice.reducer
// );



// store with configureStore
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;