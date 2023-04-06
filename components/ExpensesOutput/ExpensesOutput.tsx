/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const EXPNESES = [
  {
    id: 'e1',
    descriptions: 'Avocado',
    amount: 3.99,
    date: new Date('2023-03-12'),
  },

  {
    id: 'e2',
    descriptions: 'T-shirt',
    amount: 16.99,
    date: new Date('2023-02-11'),
  },

  {
    id: 'e3',
    descriptions: 'Some bananas',
    amount: 24.99,
    date: new Date('2023-01-01'),
  },

  {
    id: 'e4',
    descriptions: 'Programing in Java Book',
    amount: 71.69,
    date: new Date('2022-12-12'),
  },

  {
    id: 'e5',
    descriptions: 'Audi A8',
    amount: 60000,
    date: new Date('2021-09-27'),
  },
];

function ExpensesOutput({expensesPeroid}): JSX.Element {
 
  return (
    <View>
      <ExpensesSummary expenses={EXPNESES} peroidName={expensesPeroid} />
      <ExpensesList expenses={EXPNESES}/>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default ExpensesOutput;