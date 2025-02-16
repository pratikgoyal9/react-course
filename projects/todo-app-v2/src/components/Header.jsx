import css from "./Header.module.css";

function Header() {
  return (
    <>
      <div>
        <h1 className={`${css.TdHeading} TdRow`}>TODO App</h1>
      </div>
    </>
  );
}

export default Header;
