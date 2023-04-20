/* eslint-disable */
import {createContext, useReducer} from 'react';

const EXPNESES = [
    {
      id: 'e1',
      description: 'Avocado',
      amount: 3.99,
      date: new Date('2023-03-12'),
    },
  
    {
      id: 'e2',
      description: 'T-shirt',
      amount: 16.99,
      date: new Date('2023-02-11'),
    },
  
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 24.99,
      date: new Date('2023-01-01'),
    },
  
    {
      id: 'e4',
      description: 'Programing in Java Book',
      amount: 71.69,
      date: new Date('2022-12-12'),
    },
  
    {
      id: 'e5',
      description: 'Audi A8',
      amount: 60000,
      date: new Date('2021-09-27'),
    },
    {
      id: 'e6',
      description: 'Intel Core i9',
      amount: 9000,
      date: new Date('2023-04-18'),
    },
  ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  updateExpense: (id, {description, amount, date}) => {},
  deleteExpense: id => {},
});

const initialState = [...EXPNESES];

const expensesReducer = (state, action) => {
    if(action.type === 'ADD') {
        const id = new Date().toString() + Math.random().toString()
        return [{...action.payload, id: id},...state]
    }
    if(action.type === 'UPDATE') {
        const updatedableExpenseIndex = state.findIndex((item) => item.id === action.payload.id)
        const updatedableExpense = state[updatedableExpenseIndex];
        const updatedItem = {...updatedableExpense, ...action.payload.data}
        const updatedExpenses = [...state];
        updatedExpenses[updatedableExpenseIndex] = updatedItem;
        return updatedExpenses
    }
    if(action.type === 'DELETE') {
        return state.filter((item) => item.id !== action.payload)
    }

    return state;
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, initialState);
    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }
    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id});
    }
    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const value = {
      expenses: expensesState,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      updateExpense: updateExpense,
    }
    
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
