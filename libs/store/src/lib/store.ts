import { atom } from 'jotai';

export interface Todo {
  id: number;
  text: string;
}

export const todoListAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(null, (get, set, text: string) => {
  set(todoListAtom, [...get(todoListAtom), { id: Date.now(), text }]);
});

export const removeTodoAtom = atom(null, (get, set, index: number) => {
  set(
    todoListAtom,
    get(todoListAtom).filter((_, i) => i !== index)
  );
});
