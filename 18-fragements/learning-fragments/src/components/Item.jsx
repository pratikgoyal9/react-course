/* 
CSS module:
1. Create with same name as component name
1. Keep the css file at the same level of component
1. Declare in module.css file and use it inside the component
1. Can be called any object as css or styles or custom name to access class names
1. Use syntax: {css['class-name']} OR
1. Access the class names from a CSS module using dot notation if the class names are valid JavaScript identifiers (i.e., they do not contain hyphens or other special characters)
*/
import css from "./Item.module.css";

const Item = ({ foodItem }) => {
  const buttonClickHandler = (event, foodItem) => {
    /* SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button._button_wald7_10, …} */
    console.log(event);

    /* `foodItem` was bought */
    console.log(`${foodItem} was bought`);
  };
  return (
    <>
      <li className={`list-group-item ${css["kg-item"]}`}>
        <span className={css.KgSpan}>{foodItem}</span>
        <button
          className={css.button}
          onClick={(event) => buttonClickHandler(event, foodItem)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
