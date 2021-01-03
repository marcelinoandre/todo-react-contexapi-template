import { typesTodo } from './types';
import { v4 as uuidv4 } from 'uuid';

export function reducer(state, action) {
  switch (action.type) {
    case typesTodo.TODO_ADD:
      return state.concat({
        id: uuidv4(),
        title: action.payload.title,
        completed: false
      });

    case typesTodo.TODO_TOGGLE_COMPLETED:
      return state.map(todo => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed };
        return todo;
      });

    default:
      return state;
  }
}
