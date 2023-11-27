import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import useFetch from '../hooks/useFetch.js';

// const places = localStorage.getItem('places');

// get users location
// navigator.geolocation.getCurrentPosition((position) => {
//   // sorted places with the got places from API,
//   // with current lat and long
//   const sortedPlaces = sortPlacesByDistance(
//     places, 
//     position.coords.latitude, 
//     position.coords.longitude
//   );
  
//   // set places in available places state.
//   setAvailablePlaces(sortedPlaces);
  
//   // to indicated that we are fetching data so hide the loading text
//   setIsFetching(false);
// });

export default function AvailablePlaces({ onSelectPlace }) {
  
  const {
    isFetching, 
    error, 
    fetchedData: availablePlaces, 
    setFetchedData: setAvailablePlaces
   } = useFetch(fetchAvailablePlaces, []);


  if(error) {
    return <Error 
      title= "An error occurred!"
      message= { error.message }
    />
  }

  return (
    <Places
      title="Available Places"
      places={ availablePlaces }
      isLoading={ isFetching }
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}