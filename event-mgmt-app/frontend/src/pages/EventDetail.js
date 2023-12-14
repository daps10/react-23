import React from "react";
import { useParams } from "react-router-dom";

function EventDetail(){
  const params= useParams();

  return (
    <React.Fragment>
      <h1>EventDetail page</h1>
      <p>Event ID: {params.eventId }</p>
    </React.Fragment>
  )
}

export default EventDetail;