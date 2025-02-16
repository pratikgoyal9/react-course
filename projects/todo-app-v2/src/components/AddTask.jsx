function AddTask() {
  return (
    <>
      <div className="row TdRow">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO here"
            className="TdWidth"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" className="TdWidth"></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success TdButton">Add</button>
        </div>
      </div>
    </>
  );
}

export default AddTask;
