import css from "./CustomItem.module.css";

function CustomItem() {
  const onChangeEventHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        <input
          className={css.foodItem}
          type="text"
          placeholder="enter good item"
          onChange={onChangeEventHandler}
        ></input>
      </div>
    </>
  );
}

export default CustomItem;
