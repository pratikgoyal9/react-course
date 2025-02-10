import "./App.css";

function App() {
  const healthyFoods = [
    "Roti",
    "Dal",
    "Rice",
    "Green Vegetable",
    "Milk",
    "Ghee",
  ];

  return (
    /* 
    Without using extra DOM element to wrap more than one element, we can directly wrap under fragments. This fragment won't be loaded inside the DOM
    Use <React.Fragment /> or </> 
    */

    /* 
    Map is used to convert  from one type to another type. For ex., here we are converting array of string type to list item array.

    use a `key` prop to assign a unique value in virtual DOM, so that rendering of element is seamless when there are updates. Also, using a `key` prop would avoid errors on client console. It gives a performance gain
    */

    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {healthyFoods.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
