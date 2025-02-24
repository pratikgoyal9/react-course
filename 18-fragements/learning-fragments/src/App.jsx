/* 
    Fragments:
    Without using extra DOM element to wrap more than one element, we can directly wrap under fragments. This fragment won't be loaded inside the DOM
    Use <React.Fragment /> or </> 
    */

/* 

    Map is used to convert  from one type to another type. For ex., here we are converting array of string type to list item array.

    use a `key` prop to assign a unique value in virtual DOM, so that rendering of element is seamless when there are updates. Also, using a `key` prop would avoid errors on client console. It gives a performance gain
    */

/*
    Conditional rendering can be done in 3 ways:
    1. if-else: choose between 2 blocks of content
    1. ternary-operators: quick way to choose between 2 operators
    1. logical operators: useful for rendering content when a condition is true. Evaluates the left part, if true execute the right part else return false. 
    */

import "./App.css";
import Container from "./components/Container";
import EmptyMessage from "./components/EmptyMessage";
import CustomItem from "./components/CustomItem";
import HealthyFoods from "./components/HealthyFoods";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([
    "Roti",
    "Dal",
    "Rice",
    "Green Vegetable",
    "Milk",
    "Ghee",
  ]);

  let [textToShow, setTextToShow] = useState(); // useState is an array that returns an initial value and set function.

  // Another long way to define useState
  /*   let textStateArr = useState("Entered food item"); // will be set as the initial value of textStateArr[0]
  let textStateArr = useState();   // will be set as undefined of textStateArr[0]
  let textToShow = textStateArr[0];
  let setTextToShow = textStateArr[1]; */

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  // const foodItems = [];

  /* 
1. if-else:

  if (healthyFoods.length === 0) {b
    return <h3>The list is empty</h3>;
  } */

  return (
    <>
      <Container>
        <h1 className="kg-heading">Healthy Food</h1>

        {/* 1. ternary operators:
      {healthyFoods.length === 0 ? <h3>The list is empty </h3> : null}
       */}

        {/*
      create your own attribute and assign the object. Once assigned, that attribute is saved in react props and can be called as props.<attributeName>
      */}
        <EmptyMessage foodItems={foodItems}></EmptyMessage>
        <CustomItem onKeyDownHandler={onKeyDown}></CustomItem>
        <p>{textToShow}</p>
        <HealthyFoods foodItems={foodItems}></HealthyFoods>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
