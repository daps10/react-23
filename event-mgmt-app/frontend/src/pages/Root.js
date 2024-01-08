import React, { useEffect } from "react";
import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";

function Root(){
  // const navigation= useNavigation();
  const token= useLoaderData();
  const submit= useSubmit();

  // check token exist or not
  useEffect(() => {
    // if not token exist
    if(!token) {
      return;
    }

    // check token expired or not
    if(token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' })
      return;
    }

    const tokenDuration= getTokenDuration();
    // called this after 1hr
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* { navigation.state === 'loading' && <p>Loading....</p> } */}
        <Outlet />
      </main>
      </>
  )
}

export default Root;