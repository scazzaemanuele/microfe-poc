// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { addTodoAtom, Todo } from '@nx-microfe/store';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
interface AppProps {
  title?: string;
  onAddTodo?: (todo: Todo) => void;
}

export function App({ title = 'Widget 1', onAddTodo }: AppProps) {
  const [text, setText] = useState('');

  const addGlobalTodo = useSetAtom(addTodoAtom);

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #333',
        display: 'inline-block',
        height: 'fit-content',
      }}
    >
      <h1>{title}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addGlobalTodo(text)}>Add global todo</button>
      <button onClick={() => onAddTodo?.({ id: Date.now(), text })}>
        Add local todo
      </button>
    </div>
  );
}

export default App;
