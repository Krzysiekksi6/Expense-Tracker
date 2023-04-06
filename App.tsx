/* eslint-disable */
import React from 'react';
import {StyleSheet, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import {GlobalStyles} from './constans/styles';

function App(): JSX.Element {
  const Stack = createStackNavigator();
  const BottomTabs = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const hideHeader = {};

  const ExpensesOverview = () => {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
        }}>
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          
        />
        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpenses}
          
        />
      </BottomTabs.Navigator>
    );
  };
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
