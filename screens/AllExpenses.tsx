/* eslint-disable */
import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';

function AllExpenses(): JSX.Element {
  const expenseCtx = useContext(ExpensesContext);
  const fallbackText = 'No registered expenses...';
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeroid="Total"
      fallbackText={fallbackText}
    />
  );
}

export default AllExpenses;
