import { useContext } from 'react';
import { Context } from '../../states/Context';
import { todoToggleCompleted } from '../../states/todo/actions';
import { reducer } from '../../states/todo/reducer';

export const ListTodo = () => {
  const { todoList, dispatchTodo } = useContext(Context);

  function handleToggleCompeted(id) {
    dispatchTodo(todoToggleCompleted(id));
  }
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <p
            className={`${todo.completed && 'toggle-completed'} toggle`}
            onClick={() => handleToggleCompeted(todo.id)}
          >
            {todo.title}
          </p>
        </li>
      ))}
    </ul>
  );
};
