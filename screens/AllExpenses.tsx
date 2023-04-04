/* eslint-disable */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AllExpenses(): JSX.Element {
  return <Text style={styles.highlight}>AllExpenses screen!</Text>;
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default AllExpenses;
