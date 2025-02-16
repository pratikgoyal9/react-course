import css from "./Buttons.module.css";

const buttonsName = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

const Buttons = () => {
  return (
    <div className={css.buttonsContainer}>
      {buttonsName.map((item) => (
        <button key={`${item}`} className={`${css.buttons}`}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
