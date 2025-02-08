function AddToDo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="input" placeholder="Enter TODO here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
