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

    default:
      return state;
  }
}
