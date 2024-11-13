import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
export default function FoodDetails({foodId}){
    const [food,setFood]=useState({})
    const [isLoding,setIsLoading]=useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY="33714614107f44fc9a2f5706ff6bf436";
    useEffect(()=>{
        async function fetchFood(){
            const responce = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await responce.json();
            console.log(data);
            setFood(data)
            setIsLoading(false)
        }
        fetchFood();
    },[foodId])
    return(
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
            <span><strong>⏱ {food.readyInMinutes} Minutes </strong></span>
            <span>👩‍👧‍👦<strong>Serves {food.servings}</strong></span>
            <span><strong>{food.vegetarian? " 🥕 Vegetarian" : " 🍗 Non-vegetarian"}</strong></span>
            <span><strong>{food.vegan? " Vegan":""}</strong></span>
        </div>
        <div>💲{" "} <span><strong>{food.pricePerServing/100} Per serving</strong></span></div>
        <h2>Ingredients</h2>  
       <ItemList food={food} isLoding={isLoding}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstuctions}>
            <ol>
            {isLoding?<p>Loading...</p>:food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li> ))}
            </ol>
        </div>
        </div>
        </div>
    )
}