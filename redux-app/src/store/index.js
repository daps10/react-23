// import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// initial state
const initialState= {
  counter: 0,
  showCounter: true
}

// create slice
const counterSlice= createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; 
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }
});

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
  reducer: counterSlice.reducer
});

export const counterActions= counterSlice.actions;
export default store;