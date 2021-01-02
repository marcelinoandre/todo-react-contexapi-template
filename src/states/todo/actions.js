import { typesTodo } from './types';

export const todoAdd = title => {
  return {
    type: typesTodo.TODO_ADD,
    payload: {
      title
    }
  };
};
