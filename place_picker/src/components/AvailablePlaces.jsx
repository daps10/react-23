import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

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

        // set places in available places state.
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ 
          message: error.message || 'Could not fetch places, please try agin later!' 
        });      
      }

      // to indicated that we are fetching data so hide the loading text
      setIsFetching(false);
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