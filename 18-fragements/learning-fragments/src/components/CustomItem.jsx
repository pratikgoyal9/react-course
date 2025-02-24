import css from "./CustomItem.module.css";

function CustomItem({ onKeyDownHandler }) {
  return (
    <>
      <div>
        <input
          className={css.foodItem}
          type="text"
          placeholder="enter good item"
          onKeyDown={onKeyDownHandler}
        ></input>
      </div>
    </>
  );
}

export default CustomItem;
