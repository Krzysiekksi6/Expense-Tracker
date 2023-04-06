/* eslint-disable */
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

/* eslint-disable */
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

const ExpensesList = ({expenses}) => {
  const renderExpenseItem = (itemData) => {
    return (
      <Text>{itemData.item.description}</Text>
    );
  }
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>;
};

export default ExpensesList;



export default ExpensesList;
