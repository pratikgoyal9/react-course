function RandomNumber() {
  const number = Math.round(Math.random() * 100);
  return (
    <h4 style={{ backgroundColor: "grey" }}>Random Number is: {number}</h4>
  );
}

export default RandomNumber;
