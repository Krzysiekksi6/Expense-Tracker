/* eslint-disable */
import React, {useState} from 'react';
import {StyleSheet, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import {GlobalStyles} from './constans/styles';
import {GlobalColors} from './constans/styles';
import IconButton from './UI/IconButton';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ExpensesContextProvider from './store/expenses-context';

function App(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
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
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalColors.colors.white500},
          headerTintColor: 'black',
          tabBarStyle: {backgroundColor: GlobalColors.colors.white500},
          tabBarActiveTintColor: GlobalColors.colors.gold,
          headerRight: tintColor => {
            return (
              <IconButton
                onPress={() => {
                  navigation.navigate('ManageExpense');
                }}
                color={GlobalColors.colors.red}
                icon={'ADD'}
              />
            );
          },
        })}>
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent Expenses',
            tabBarIcon: () => null,
            tabBarLabelStyle: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [{translateX: -45}, {translateY: -12}],
              fontWeight: '600',
              fontSize: 14,
            },
          }}
        />
        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarIcon: () => null,
            tabBarLabel: 'All Expenses',
            tabBarLabelStyle: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [{translateX: -45}, {translateY: -12}],
              fontWeight: '600',
              fontSize: 14,
            },
          }}
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
      <ExpensesContextProvider>
        <NavigationContainer>
          {isAuth && (
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: GlobalColors.colors.white50,
                },
                headerTintColor: 'white',
              }}>
              <Stack.Screen
                name="ExpensesOverview"
                component={ExpensesOverview}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ManageExpense"
                component={ManageExpenses}
                options={{
                  presentation: 'modal',
                }}
              />
            </Stack.Navigator>
          )}
          {!isAuth && (
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: GlobalColors.colors.white50,
                },
                headerTintColor: 'white',
              }}>
              <Stack.Screen
                name="Login"
                component={SignInScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={SignUpScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
