// import { useEffect, useState } from "react";
import useHttp from "../hook/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig= {};

export default function Meals() {
  // older to called in this file only
  // const [loadedMeals, setLoadedMeals]= useState([]);

  // Get request to get meals
  // useEffect(() => {
  //   async function fetchMeals(){ 
  //     const response= await fetch('http://localhost:3000/meals');
      
  //     if(!response.ok) {
  //       // ---
  //     }
  
  //     const meals= await response.json();
  //     setLoadedMeals(meals);
  //   } 

  //   fetchMeals();
  // }, []);

  // new way to call an API from Custom
  const {
    data: loadedMeals,
    isLoading,
    error
  } = useHttp('http://localhost:3000/meals', requestConfig, []);
  
  // loader before meals
  if(isLoading) {
    return (
      <p className="center"> Fetching meals.... </p>
    )
  }

  // check errors
  if(error) {
    return (
      <Error 
        title= 'Failed to fetch meals'
        message= {error}
      />
    );
  }

  return (
    <ul id="meals">
      {
        loadedMeals.map((meal) => (
          <MealItem key={ meal.id } meal={ meal }/>
        ))
      }
    </ul>
  )
}