/* eslint-disable */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
  import AllExpenses from './screens/AllExpenses';


function App(): JSX.Element {
 
  return (
    <SafeAreaView>
      <AllExpenses/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
