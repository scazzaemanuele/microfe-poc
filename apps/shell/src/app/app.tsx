import { Todo } from '@nx-microfe/store';
import * as React from 'react';
import { useState } from 'react';

const InputWidget = React.lazy(() => import('widget1/Module'));
const OutputWidget = React.lazy(() => import('widget2/Module'));

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <React.Suspense fallback={null}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <InputWidget title="Input Widget" onAddTodo={addTodo} />
        <OutputWidget title="Output Widget" todos={todos} />
      </div>
    </React.Suspense>
  );
}

export default App;
