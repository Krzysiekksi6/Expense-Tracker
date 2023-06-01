/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import {GlobalColors} from './constans/styles';
import IconButton from './UI/IconButton';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ExpensesContextProvider from './store/expenses-context';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import Button from './UI/Button';

function App(): JSX.Element {
  const Stack = createStackNavigator();
  const BottomTabs = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const authCtx = useContext(AuthContext);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function ExpensesOverview() {
    const authCtx = useContext(AuthContext);

    return (
      <BottomTabs.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalColors.colors.white500},
          headerTintColor: 'black',
          tabBarStyle: {backgroundColor: GlobalColors.colors.white500},
          tabBarActiveTintColor: GlobalColors.colors.gold,
          headerRight: tintColor => {
            return (
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  onPress={() => {
                    navigation.navigate('ManageExpense');
                  }}
                  color={GlobalColors.colors.red}
                  icon={'ADD'}
                />
                <IconButton
                  onPress={() => {
                    console.log('logout');
                    console.log(authCtx.isAuthenticated);
                    authCtx.logout();
                  }}
                  color={GlobalColors.colors.blue}
                  icon={'LOGOUT'}
                />
              </View>
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
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator>
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
    );
  }

  function AuthStack() {
    return (
      <Stack.Navigator>
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
    );
  }
  function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
      <NavigationContainer>
        {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
      </NavigationContainer>
    );
  }
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AuthContextProvider>
        <ExpensesContextProvider>
          <Navigation />
        </ExpensesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
