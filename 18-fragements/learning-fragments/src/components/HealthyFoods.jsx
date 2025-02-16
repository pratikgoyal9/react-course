import Item from "./Item";

const HealthyFoods = ({ foodItems }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default HealthyFoods;
