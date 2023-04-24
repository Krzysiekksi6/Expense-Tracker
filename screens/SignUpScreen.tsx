/* eslint-disable */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CustomInput from '../UI/AuthInput/CustomInput';
import CustomButton from '../UI/AuthButton/CustomButton';


const SignUpScreen = () => {
  const [email, setEmail] = useState('');

  const onSignInPressed = () => {};
  const onSignUpPressed = () => {};

  return (
    <View style={styles.container}>
    
      <View style={styles.label}>
        <Text style={styles.labelText}>Sign up</Text>
      </View>
      <CustomInput value={email} setValue={setEmail} placeholder={'email'} />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder={'password'}
        secureTextEntry={true}
      />
      <CustomButton onPress={onSignUpPressed} text={'Sign up'} />
      <View style={styles.footer}>
        <Text style={{marginRight: 10}}>Have an Account?</Text>
        <CustomButton
          onPress={onSignInPressed}
          text={'Sign in'}
          type="TERTIARY"
          width="33%"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  label: {
    marginVertical: 20,
  },
  labelText: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default SignUpScreen;
