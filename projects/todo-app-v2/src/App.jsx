import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import AddTask from "./components/AddTask";
import TodoTasks from "./components/TodoTasks";

const tasks = [
  { name: "Buy milk", date: "08/02/2025" },
  { name: "Learn react", date: "09/02/2025" },
];

// const tasks = [];

function App() {
  return (
    <div className="container text-center">
      <Header></Header>
      <AddTask></AddTask>
      <TodoTasks dataTasks={tasks}></TodoTasks>
    </div>
  );
}

export default App;
