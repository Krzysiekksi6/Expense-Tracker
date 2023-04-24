/* eslint-disable */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions} from 'react-native';
import CustomInput from '../UI/AuthInput/CustomInput';
import Logo from '../assets/images/dollar-1-svgrepo-com.png';
import CustomButton from '../UI/AuthButton/CustomButton';
// import Button from '../UI/Button';

const SignInScreen = ({navigation, route}) => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserToken } = route.params;

  const navigateToSignUp = ():void => {
    navigation.navigate('Signup');
  };
  const onSignInPressed = ():void => {
    setUserToken('token');
    // navigation.navigate('RecentExpenses')
  };
  const onSignUpPressed = ():void => {
    navigateToSignUp();
  };
  const onForgotPasswordPressed = ():void => {
    navigateToSignUp();
  };
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.08}]}
        resizeMode="contain"
      />
      <Text style={styles.title}>Expense Tracker</Text>
      <View style={styles.label}>
        <Text style={styles.labelText}>Sign In</Text>
      </View>
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

        <CustomButton text={'Sign Up'} onPress={onSignUpPressed} width="40%" />
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
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 26,
  },
  label: {
    width: '100%',
    marginVertical: 10,
  },
  labelText: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 5,
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
  },
});

export default SignInScreen;
