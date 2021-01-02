import { useEffect, useReducer } from 'react';
import { Context } from '../Context';
import { reducer } from './reducer';

export function ProviderTodo({ children }) {
  const initDataTodo = JSON.parse(localStorage.getItem('LIST_DATA_TODO')) || [];
  const [todoList, dispatchTodo] = useReducer(reducer, initDataTodo);

  useEffect(() => {
    localStorage.setItem('LIST_DATA_TODO', JSON.stringify(todoList));
    console.log('use efect chamado....');
  }, [todoList]);

  return (
    <Context.Provider value={{ todoList, dispatchTodo }}>
      {children}
    </Context.Provider>
  );
}
