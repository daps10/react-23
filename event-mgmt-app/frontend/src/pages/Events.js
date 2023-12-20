import { Await, defer, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function Events() {
  const { events }= useLoaderData();

  return (
    <>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
    </>
  );
}

export default Events;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
      
  if (!response.ok) {
    // with sending message
    // return {
    //   isError: true,
    //   message: 'Could not fetch events.'
    // }
    
    // json stringify 
    // throw new Response(
    //   JSON.stringify({
    //     message: 'Could not fetch events.'
    //   }),
    //   {
    //     status: 500
    //   }
    // )

    throw json(
      { message: 'Could not fetch events' },
      {
        status: 500
      }
    )

  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents() 
  });
}