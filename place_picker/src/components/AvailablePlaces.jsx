import { useEffect, useState } from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // initialized async await
    async function fetchPlaces() {
      // to indicated that we are fetching data so show the loading text
      setIsFetching(true);  

      // fetching data with fetch API
      // it returns promises to handle with then method
      const response= await fetch('http://localhost:3000/places');
      const resData= await response.json();

      setAvailablePlaces(resData.places);

      // to indicated that we are fetching data so hide the loading text
      setIsFetching(false);
    }

    fetchPlaces();
  }, [])

  
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