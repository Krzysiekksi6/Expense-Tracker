import {useContext} from 'react';
import {AuthContext} from '../store/auth-context';
import axios from 'axios';
import {Expense} from '../constans/Expense';
const API_URL =
  'https://expense-tracker-94bad-default-rtdb.europe-west1.firebasedatabase.app';

// GET

export async function fetchExpenses(token): Promise<Expense[]> {
  const response = await axios.get(API_URL + `/expenses.json?auth=${token}`);
  const expenses = Object.keys(response.data).map(key => {
    return {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
  });
  return expenses;
}
// POST
export async function storeExpense(expenseData, token) {
  console.log("POST TOKEN", token);
  const response = await axios.post(
    API_URL + `/expenses.json?auth=${token}`,
    expenseData,
  );
  const id: string = response.data.name;
  return id;
}
// PUT

export function updateExpense(id: string, data: Expense, token: string) {
  return axios.put(API_URL + `/expenses/${id}.json?auth=${token}`, data);
}
export function deleteExpense(id: string, token: string) {
  return axios.delete(API_URL + `/expenses/${id}.json?auth=${token}`);
}
