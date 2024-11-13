import { useState } from 'react'
import Search from './componets/Search'
import FoodList from './componets/FoodList'
import Nav from './componets/Nav'
import "./App.css";
import Container from './componets/Container';
import InnerContainer from './componets/InnerContainer';
import FoodDetails from './componets/FoodDetails';

function App() {
  const [fooData,setFoodData]=useState([])
  const [foodId,setFoodId]=useState("658615")
  return (
    <div className="App">
      <Nav />
      <Search foodData={fooData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
      <FoodList fooData={fooData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
