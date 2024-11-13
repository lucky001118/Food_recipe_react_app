import FoodItem from "./FoodItem";

export default function FoodList({fooData,setFoodId}){
    return <div>
        {fooData.map((food)=> 
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
        )}
    </div>
}