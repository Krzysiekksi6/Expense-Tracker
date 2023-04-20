/* eslint-disable */
import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

function RecentExpenses(): JSX.Element {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpenses = expenseCtx.expenses.filter((item) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);
    return (item.date > dateSevenDaysAgo) && (item.date <= today);
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeroid="Last 7 Days"/>;
}

export default RecentExpenses;
