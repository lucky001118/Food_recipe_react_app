import { useEffect, useState } from "react"
import styles from "./search.module.css";

const url="https://api.spoonacular.com/recipes/complexSearch";
const api_key="33714614107f44fc9a2f5706ff6bf436";
export default function Search({foodData,setFoodData}){
    const [query,setQuery]=useState("pizza");
    //syntex of useEffect hook
    // useEffect(()=>{
    //     function demo(){
    //         console.log("Demo function is executed.!");
    //     }
    //     demo()
    // },[query]);

    useEffect(()=>{
        async function fetchFood(){
            console.log(query)
            const res = await fetch(`${url}?query=${query}&apiKey=${api_key}`);
            const data = await res.json();
            console.log(data.results)
            setFoodData(data.results)
        }
        fetchFood();
    },[query])
    return <div className={styles.searchContainer}>
        <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
    </div>
}