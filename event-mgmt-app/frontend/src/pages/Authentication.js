import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

// /auth
export async function action({ request }) {
  const searchParams= new URL(request.url).searchParams;
  const mode= searchParams.get('mode') || 'login';

  // check model is signup or login 
  if(mode !== 'login' && mode !== 'signup') {
    throw json({
      message: 'Unsupported mode.'
    }, { status: 422 });
  }

  // get the form data from the form.
  const data= await request.formData();
  const authData= {
    email: data.get('email'),
    password: data.get('password')
  }

  // called the API with authdata
  const response= await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  // check if the status is 422 or 401 
  if(response.status === 422 || response.status === 401) {
    return response;
  }

  // check the repsonse is ok or not
  if(!response.ok) {
    throw json({
      message: 'Could not authenticated user.'
    }, { status: 500 });
  }

  // fetch response 
  const resData= await response.json();
  const token= resData.token;
  
  // store token inside localstorage
  localStorage.setItem('token', token);
  const expiration= new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString()); 

  return redirect('/');
}