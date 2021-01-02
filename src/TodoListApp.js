import { ProviderTodo } from './states/todo/Provider';
import { AddTodo } from './components/Todo/Add';
import { ListTodo } from './components/Todo/List';

export const TodoListApp = () => {
  return (
    <ProviderTodo>
      <AddTodo />
      <ListTodo />
    </ProviderTodo>
  );
};
