// import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// initial state for counter
const initialCounterState= {
  counter: 0,
  showCounter: true
}

// create slice for counter
const counterSlice= createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

// initialstate for authentication
const initialAuthState = {
  isAuthenticated: false
}

// create slice for authentication
const authSlice= createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

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
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions= counterSlice.actions;
export const authActions= authSlice.actions;

export default store;