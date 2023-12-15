import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function Events() {
  const data= useLoaderData();

  // check errors 1 way
  // if(data.isError) {
  //   return <p>{ data.message }</p>
  // }

  const events= data.events;
  
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default Events;

export async function loader() {
  const response = await fetch('http://localhost:8080/eventss');
      
  if (!response.ok) {
    // with sending message
    // return {
    //   isError: true,
    //   message: 'Could not fetch events.'
    // }
    throw new Response(
      JSON.stringify({
        message: 'Could not fetch events.'
      }),
      {
        status: 500
      }
    )

  } else {
    const resData = await response.json();
    return resData;
  }
}