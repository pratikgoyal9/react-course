const EmptyMessage = (props) => {
  /* 
  JS concept i.e. object destructing:

  `const foodItems = props.foodItems;`
  
  Below is more concise way to write
   */
  const { foodItems } = props; // or pass props.foodItems.length below

  {
    /* 1. logical operators: */
  }
  return <> {foodItems.length === 0 && <h3>The list is empty </h3>}</>;
};

export default EmptyMessage;
