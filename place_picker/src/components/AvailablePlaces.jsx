import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // initialized async await
    async function fetchPlaces() {
      // to indicated that we are fetching data so show the loading text
      setIsFetching(true);  

      try {
        // fetching data with fetch API
        // it returns promises to handle with then method
        const response= await fetch('http://localhost:3000/places');
        const resData= await response.json();
        
        // check response is 200 or not
        if(!response.ok) {
          throw new Error('Failed to fetch places');
        }

        // get users location
        navigator.geolocation.getCurrentPosition((position) => {
          // sorted places with the got places from API,
          // with current lat and long
          const sortedPlaces = sortPlacesByDistance(
            resData.places, 
            position.coords.latitude, 
            position.coords.longitude
          );
          
          // set places in available places state.
          setAvailablePlaces(sortedPlaces);
          
          // to indicated that we are fetching data so hide the loading text
          setIsFetching(false);
        });
      } catch (error) {
        setError({ 
          message: error.message || 'Could not fetch places, please try agin later!' 
        });      
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, [])

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