import css from "./TodoTask.module.css";

function TodoTask({ dataTasks }) {
  return (
    <div className="row TdRow">
      <div key={`${dataTasks.name}`} className={`col-6 ${css.TdLabel}`}>
        {`${dataTasks.name}`}
      </div>
      <div key={`${dataTasks.date}`} className={`col-4 ${css.TdLabel}`}>
        {`${dataTasks.date}`}
      </div>
      <div key={`${dataTasks}`} className="col-2">
        <button className="btn btn-danger TdButton">Delete</button>
      </div>
    </div>
  );
}

export default TodoTask;
