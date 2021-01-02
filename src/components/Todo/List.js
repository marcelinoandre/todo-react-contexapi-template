import { useContext } from 'react';
import { Context } from '../../states/Context';

export const ListTodo = () => {
  const { todoList } = useContext(Context);
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
