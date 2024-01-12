// import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-row w-auto h-screen">
      <TodoList/>
      <Todo/>
    </div>
  );
}

export default App;
