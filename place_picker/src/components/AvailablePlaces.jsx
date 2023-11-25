import { useEffect, useState } from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  
  useEffect(() => {
    // initialized async await
    async function fetchPlaces() {
      // fetching data with fetch API
      // it returns promises to handle with then method
      const response= await fetch('http://localhost:3000/places');
      const resData= await response.json();

      setAvailablePlaces(resData.places);
    }

    fetchPlaces();
  }, [])

  
  return (
    <Places
      title="Available Places"
      places={ availablePlaces }
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}