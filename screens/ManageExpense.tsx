/* eslint-disable */
import React, {useLayoutEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from '../UI/IconButton';
import {GlobalStyles} from '../constans/styles';
import {GlobalColors} from '../constans/styles';
import Button from '../UI/Button';
import {ExpensesContext} from '../store/expenses-context';

function ManageExpenses({route, navigation}): JSX.Element {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
      headerStyle: {backgroundColor: GlobalColors.colors.white500},
      headerTintColor: 'black',
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };
  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: 'Test!!!',
        amount: 7.99,
        date: new Date('2022-06-06'),
      });
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 7.99,
        date: new Date('2022-05-05'),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler} mode={null}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Button
            style={styles.deleteButton}
            mode={'error'}
            onPress={deleteExpenseHandler}>
            Delete
          </Button>
          {/* <IconButton
            icon={'delete'}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          /> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalColors.colors.white50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteButton: {
    minWidth: 120,
    marginTop: 16,
  },
  deleteContainer: {
    // alignItems: 'center',
    // marginTop: 16,
    // paddingTop: 8,
    // borderWidth: 2,
    // borderTopColor: GlobalStyles.colors.primary200,
  },
});

export default ManageExpenses;
