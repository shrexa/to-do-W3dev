
namespace React;// Define the Todo interface
interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  // Define the TodoList component
  const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
    return (
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          </li>
        ))}
      </ul>
    );
  };
  
  // Define the App component
  const App: React.FC = () => {
    // Initial todo list state
    const [todos, setTodos] = React.useState<Todo[]>([
      { id: 1, text: 'Learn TypeScript', completed: false },
      { id: 2, text: 'Build a todo app', completed: false },
      { id: 3, text: 'Add TypeScript to the todo app', completed: false },
    ]);
  
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={todos} />
      </div>
    );
  };
  
  // Render the App component
  ReactDOM.render(<App />, document.getElementById('root'));
  