import { createSlice } from "@reduxjs/toolkit";

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

export const authActions= authSlice.actions;
export default authSlice.reducer;