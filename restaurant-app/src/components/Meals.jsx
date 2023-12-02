// import { useEffect, useState } from "react";
import useHttp from "../hook/useHttp";
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
  
  
  if(isLoading) {
    return <p> Fetching meals.... </p>
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