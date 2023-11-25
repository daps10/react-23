export async function fetchAvailablePlaces() {
  // fetching data with fetch API
  // it returns promises to handle with then method
  const response= await fetch('http://localhost:3000/places');
  const resData= await response.json();
  
  // check response is 200 or not
  if(!response.ok) {
    throw new Error('Failed to fetch places');
  } 

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response= await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  const resData= await response.json();
  if(!response.ok) {
    throw new Error('Failed to update user data.');
  }

  return resData.message;
}