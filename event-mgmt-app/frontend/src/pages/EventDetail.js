import React from "react";
import { json, useLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

function EventDetail(){
  const data= useLoaderData();

  return (
    <EventItem event={ data.event }/>
  )
}

export default EventDetail;

export async function loader({ request, params }) {
  const eventId= params.eventId;

  const response= await fetch(`http://localhost:8080/events/${eventId}`);
  if(!response.ok){
    throw json({ message: 'Could not fetch details for selected event.' }, {
      status: 500
    });
  } else {
    return response;
  }
} 