import TodoTask from "./TodoTask";

const TodoTasks = ({ dataTasks }) => {
  if (dataTasks.length === 0) {
    return <h3>The list is empty </h3>;
  }
  return dataTasks.map((item) => {
    return (
      <>
        <TodoTask dataTasks={item}></TodoTask>
      </>
    );
  });
};

export default TodoTasks;
