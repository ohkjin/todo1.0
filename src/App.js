// import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-row w-auto h-screen justify-center items-start my-10">
      {/* <TodoList/> */}
      <Todo/>
    </div>
  );
}

export default App;
