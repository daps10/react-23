import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals]= useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [httpError, setHttpError]= useState();
  
  // useEffect for fetch API
  useEffect(() => {
    
    const fetchMeals = async() => {
      // firebase URL
      const response= await fetch(
        'https://react-movies-app-6b7ea-default-rtdb.firebaseio.com/meals.json'
      );

      // check rsponse is ok or not
      if(!response.ok){ 
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();
      
      const loadedMeals= [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }

      // setMeals with loadedMeals
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    // load fetchmeals function
    fetchMeals()
      .catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [])

  if(isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading... </p>
    </section>
  }

  // check if error is truthy or not
  if(httpError) {
    return <section className={classes.MealsError}>
      <p>{ httpError }</p>
    </section>
  }

  const mealsList = meals.map(meal => 
      (
        <MealItem 
          id= { meal.id }
          key={ meal.id } 
          name={ meal.name }
          description={ meal.description }
          price={ meal.price }
        />
      ));

  return (
    <section className={classes.meals}>
      <Card>
        { mealsList }
      </Card>
    </section>
  )
}

export default AvailableMeals;