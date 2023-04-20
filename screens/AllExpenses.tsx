/* eslint-disable */
import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses(): JSX.Element {
  const expenseCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expenseCtx.expenses} expensesPeroid="Total"/>;
}



export default AllExpenses;