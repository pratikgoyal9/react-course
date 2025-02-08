function ToDoItem2() {
  const toDoName = "Learn react";
  const toDoDate = "09/02/2025";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
