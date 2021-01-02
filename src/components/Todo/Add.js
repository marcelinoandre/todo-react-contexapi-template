import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { Context } from '../../states/Context';
import { todoAdd } from '../../states/todo/actions';

export const AddTodo = () => {
  const { dispatchTodo } = useContext(Context);

  const initialForm = {
    title: ''
  };
  const [{ title }, handleInputChange, reset] = useForm(initialForm);

  const handleSubmit = event => {
    event.preventDefault();
    dispatchTodo(todoAdd(title));

    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={handleInputChange}
        value={title}
      />
    </form>
  );
};
