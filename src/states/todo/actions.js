import { typesTodo } from './types';

export const todoAdd = title => {
  return {
    type: typesTodo.TODO_ADD,
    payload: {
      title
    }
  };
};

export const todoToggleCompleted = id => {
  return {
    type: typesTodo.TODO_TOGGLE_COMPLETED,
    payload: {
      id
    }
  };
};
