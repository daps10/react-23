import { useCallback, useEffect, useState } from "react";

// sendHttpRequest to call an API
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData= await response.json();

  if(!response.ok) {
    throw new Error(
      resData.message || 
      'Something went wrong, failed to send request'
    ) 
  }

  return resData;
}

// useHttp hook
export default function useHttp(url, config, initialData) {
  // states for error, isloading and data
  const [data, setData]= useState(initialData);
  const [isLoading, setIsLoading]= useState(false);
  const [error, setError]= useState();

  function clearData() {
    setData(initialData);
  }

  // send Request to call and outside function
  const sendRequest = useCallback(async function sendRequest(data) {
      setIsLoading(true);
      try {
        // called a function which outside resides
        const resData= await sendHttpRequest(url, {...config, body: data});
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, [url, config]);

  // useEffect to call send request function inside here only
  useEffect(() => {
    if((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config])

  // return data for API calling
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  }
}