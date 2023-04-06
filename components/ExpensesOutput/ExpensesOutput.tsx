/* eslint-disable */

import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

const ExpensesSummary = ({expenses, peroidName}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{peroidName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;