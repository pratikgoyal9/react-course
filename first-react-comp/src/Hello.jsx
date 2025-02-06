function Hello() {
  const name = "Pratik";
  const fullName = () => {
    return "Pratik G";
  };

  return (
    <div>
      <h3>My name is {name}</h3>
      <h2>My full name is {fullName()}</h2>
    </div>
  );
}

export default Hello;
