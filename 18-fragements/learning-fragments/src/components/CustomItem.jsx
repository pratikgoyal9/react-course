import css from "./CustomItem.module.css";

function CustomItem({ onKeyDownHandler }) {
  return (
    <>
      <div>
        <input
          className={css.foodItem}
          type="text"
          placeholder="type food & press enter"
          onKeyDown={onKeyDownHandler}
        ></input>
      </div>
    </>
  );
}

export default CustomItem;
