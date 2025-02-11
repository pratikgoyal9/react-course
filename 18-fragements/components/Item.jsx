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

const Item = (props) => {
  return (
    <>
      <li className={`list-group-item ${css["kg-item"]}`}>
        <span className={css.KgSpan}>{props.foodItem}</span>
      </li>
    </>
  );
};

export default Item;
