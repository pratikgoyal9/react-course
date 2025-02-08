import "./App.css";

function App() {
  return (
    /* 
    Without using extra DOM element to wrap more than one element, we can directly wrap under fragments. This fragment won't be loaded inside the DOM
    Use <React.Fragment /> or </> 
    */
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Rice</li>
        <li class="list-group-item">Green vegetables</li>
        <li class="list-group-item">Milk</li>
      </ul>
    </>
  );
}

export default App;
