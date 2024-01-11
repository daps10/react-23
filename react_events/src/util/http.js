import { QueryClient } from '@tanstack/react-query';

export const queryClient= new QueryClient();

// fetch an events
export async function fetchEvents({ signal, searchTerm}) {
  // dynamic search URLs
  let url= 'http://localhost:3000/events';
  if(searchTerm) {
    url += '?search=' + searchTerm
  }

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

// create new event
export async function createNewEvent(eventData) {
  const response= await fetch(`http://localhost:3000/events`, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  // check response is ok or not
  if(!response.ok) {
    const error= new Error('An error occurred while creating the event');
    error.code= response.status;
    error.info= await response.json();
    throw error;
  }

  // fetched response in json 
  const { event } = await response.json();

  return event;
}

// fetch selectable images
export async function fetchSelectableImages({ signal }) {
  const response= await fetch(`http://localhost:3000/events/images`, {signal});

  // check repsonse is ok or not
  if(!response.ok) {
    const error= new Error('An error occurred while fetching the images');
    error.code= response.status;
    error.info= await response.json();
    throw error;
  }

  // return the images 
  const { images } = await response.json();

  return images;
}