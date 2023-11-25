import { useState } from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // fetching data with fetch API
  // it returns promises to handle with then method
  fetch('http://localhost:3000/places')
    .then(( response ) => {
      return response.json();
    })
    .then((resData) => {
      setAvailablePlaces(resData.places);
    });
  
  return (
    <Places
      title="Available Places"
      places={ availablePlaces }
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}