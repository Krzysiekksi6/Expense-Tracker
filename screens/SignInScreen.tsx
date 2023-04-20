/* eslint-disable */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions} from 'react-native';
import CustomInput from '../UI/AuthInput/CustomInput';
import Logo from '../assets/images/dollar.png';
import CustomButton from '../UI/AuthButton/CustomButton';
// import Button from '../UI/Button';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {};
  const onSignUpPressed = () => {};
  const onForgotPasswordPressed = () => {};
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.25}]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder={'Username'}
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text={'Sign In'} onPress={onSignInPressed} />
      <Text style={styles.infoText}>or use one of social media profiles</Text>
      <View style={styles.socialMedia}>
        <CustomButton
          text={'Twitter'}
          onPress={onSignUpPressed}
          width="40%"
          bgColor={'#1da1f2'}
        />
        <CustomButton
          text={'Facebook'}
          onPress={onSignUpPressed}
          width="40%"
          bgColor={'#3b5998'}
        />
        <CustomButton
          text={'Forgot Password?'}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          width="40%"
        />

        <CustomButton
          text={'Sign Up'}
          onPress={onSignUpPressed}
          width="40%"
        />
      </View>
      <Text style={styles.rights}>All rights reserved &copy;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 60,
  },
  infoText: {
    marginVertical: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rights: {
    marginTop: 20,
  }
});

export default SignInScreen;
