/* eslint-disable */
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {GlobalColors} from '../../constans/styles';
import {Expense} from '../../constans/Expense';

interface ExpensesOutputProps {
  expenses: Expense[];
  expensesPeroid: string;
  fallbackText?: string;
}

function ExpensesOutput({
  expenses,
  expensesPeroid,
  fallbackText,
}: ExpensesOutputProps): JSX.Element {
  let content = (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{fallbackText}</Text>
    </View>
  );
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} peroidName={expensesPeroid} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalColors.colors.white50,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    padding: 12,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalColors.colors.lightGray500,
    shadowRadius: 4,
    backgroundColor: GlobalColors.colors.lightGray500,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: GlobalColors.colors.red,
  },
});
