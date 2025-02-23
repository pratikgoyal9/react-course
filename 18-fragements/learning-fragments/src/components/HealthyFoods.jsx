import Item from "./Item";

const HealthyFoods = ({ foodItems }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item
            key={item}
            foodItem={item}
            onClickHandler={() => console.log(`${item} was bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default HealthyFoods;
