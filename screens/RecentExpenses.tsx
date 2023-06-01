/* eslint-disable */
import React, {useContext, useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {Expense} from '../constans/Expense';
import {fetchExpenses} from '../util/http';
import LoadingOverlay from '../UI/LoadingOverlay';
import ErrorOverlay from '../UI/ErrorOverlay';
import {AuthContext} from '../store/auth-context';

function RecentExpenses(): JSX.Element {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const expenseCtx = useContext(ExpensesContext);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses(authCtx.token);
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);
  const fallbackText = 'No registered expenses for the last 7 days...';
  const recentExpenses = expenseCtx.expenses.filter((item: Expense) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);
    return item.date >= dateSevenDaysAgo && item.date <= today;
  });

  const errorHandler = (): void => {
    setError('');
  };

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeroid="Last 7 Days"
      fallbackText={fallbackText}
    />
  );
}

export default RecentExpenses;
