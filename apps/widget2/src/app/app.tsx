// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { Todo, todoListAtom } from '@nx-microfe/store';
import { useAtomValue } from 'jotai';

interface AppProps {
  title?: string;
  todos?: Todo[];
}

export function App({ title = 'Widget 2', todos = [] }: AppProps) {
  const todoList = useAtomValue(todoListAtom);

  const sortedTodos = [...todos, ...todoList].sort((a, b) => a.id - b.id);

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #333',
        display: 'inline-block',
      }}
    >
      <h1>{title}</h1>
      <ul>
        {sortedTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
