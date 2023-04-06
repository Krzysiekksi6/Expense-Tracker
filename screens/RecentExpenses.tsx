/* eslint-disable */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses(): JSX.Element {
  return <ExpensesOutput expensesPeroid="Last 7 Days"/>;
}

export default RecentExpenses;
