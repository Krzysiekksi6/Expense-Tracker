/* eslint-disable */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GlobalColors, GlobalStyles} from '../../constans/styles';

const ExpensesSummary = ({expenses, peroidName}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.peroid}>{peroidName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: GlobalColors.colors.lightGray500,
    borderRadius: 6,
    marginBottom: 12,
    elevation: 3,
    shadowColor: GlobalColors.colors.lightGray500,
    shadowRadius: 3,
    
  },

  peroid: {
    fontSize: 12,
    color: GlobalColors.colors.gray
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalColors.colors.red
  }
});
