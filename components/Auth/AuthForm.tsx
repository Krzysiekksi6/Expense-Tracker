import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomInput from '../../UI/AuthInput/CustomInput';
import CustomButton from '../../UI/AuthButton/CustomButton';
const AuthForm = ({isLogin, onSubmit, credentialsInvalid}) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <CustomInput
        placeholder={'email@example.com'}
        value={enteredEmail}
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
        secureTextEntry={false}
      />
      {!isLogin && (
        <CustomInput
          placeholder={'Confirm email@example.com'}
          value={enteredConfirmEmail}
          onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
          keyboardType="email-address"
          isInvalid={emailsDontMatch}
          secureTextEntry={false}
        />
      )}
      <CustomInput
        placeholder={'Password'}
        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        secureTextEntry={true}
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />
      {!isLogin && (
        <CustomInput
          placeholder={'Confirm Password'}
          onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
          secureTextEntry={true}
          value={enteredConfirmPassword}
          isInvalid={passwordsDontMatch}
        />
      )}
      <CustomButton
        text={isLogin ? 'Log In' : 'Sign Up'}
        onPress={submitHandler}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  buttons: {
    marginTop: 12,
  },
});
