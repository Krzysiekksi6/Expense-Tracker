/* eslint-disable */
import React, {useLayoutEffect, useContext, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import IconButton from '../UI/IconButton';
import {GlobalStyles} from '../constans/styles';
import {GlobalColors} from '../constans/styles';
import Button from '../UI/Button';
import {ExpensesContext} from '../store/expenses-context';
import ExpenseFrom from '../components/ManageExpense/ExpenseFrom';
import {Expense} from '../constans/Expense';
import {storeExpense, updateExpense, deleteExpense} from '../util/http';
import LoadingOverlay from '../UI/LoadingOverlay';
import ErrorOverlay from '../UI/ErrorOverlay';
import {AuthContext} from '../store/auth-context';

function ManageExpenses({route, navigation}): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const expensesCtx = useContext(ExpensesContext);
  const authCtx = useContext(AuthContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );

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
  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId, authCtx.token);
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense!');
      setIsSubmitting(false);
    }
  };
  const confirmHandler = async (expenseData: Expense) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData, authCtx.token);
      } else {
        const id = await storeExpense(expenseData, authCtx.token);
        expensesCtx.addExpense({...expenseData, id: id});
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not confirm expense!');
      setIsSubmitting(false);
    }
  };

  function errorHandler(): void {
    setError(null);
  }
  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseFrom
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <Button
            style={styles.deleteButton}
            mode={null}
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
