import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token= localStorage.getItem('token');
  return token;
}

// returns the auth token
export function tokenLoader() {
  return getAuthToken();
}

// check authentication
export function checkAuthLoader() {
  // this function will be added in the next lecture
  // make sure it looks like this in the end
  const token= getAuthToken();

  if(!token) {
    return redirect('/auth');
  }

  return null;
}