import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../UI/AuthInput/CustomInput';
import Logo from '../../assets/images/dollar-1-svgrepo-com.png';
import CustomButton from '../../UI/AuthButton/CustomButton';
import AuthForm from './AuthForm';

type AuthContentProps = {
  isLogin?: boolean;
  onAuthenticate?: any;
};
const LOGIN_TEXT = {
  labelText: 'Login',
  buttonText: 'Sign in',
};
const REGISTER_TEXT = {
  labelText: 'Register',
  buttonText: 'Sign up',
};
const AuthContent = ({isLogin, onAuthenticate}: AuthContentProps) => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  //   const {setUserToken} = route.params;

  const navigateTo = (): void => {
    if (isLogin) {
      navigation.navigate('Signup');
    } else {
      navigation.navigate('Login');
    }
  };

  function onSecondaryButtonHandler() {
    navigateTo();
  }
  function onTwitterHandler() {
    navigateTo();
  }
  function onFacebookHandler() {
    navigateTo();
  }
  function onForgotPasswordHandler() {
    navigateTo();
  }
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const submitHandler = credentials => {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate(email, password);
  };

  let currentText;
  if (isLogin) {
    currentText = LOGIN_TEXT;
  } else {
    currentText = REGISTER_TEXT;
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.08}]}
        resizeMode="contain"
      />
      <Text style={styles.title}>Expense Tracker</Text>
      <View style={styles.label}>
        <Text style={styles.labelText}>{currentText.labelText}</Text>
      </View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      {isLogin ? (
        <>
          <Text style={styles.infoText}>
            Or use one of social media profiles
          </Text>
          <View style={styles.socialMedia}>
            <CustomButton
              text={'Twitter'}
              onPress={onTwitterHandler}
              width="40%"
              bgColor={'#1da1f2'}
            />
            <CustomButton
              text={'Facebook'}
              onPress={onFacebookHandler}
              width="40%"
              bgColor={'#3b5998'}
            />
            <CustomButton
              text={'Forgot Password?'}
              onPress={onForgotPasswordHandler}
              type="TERTIARY"
              width="40%"
            />

            <CustomButton
              text={isLogin ? REGISTER_TEXT.buttonText : LOGIN_TEXT.buttonText}
              onPress={onSecondaryButtonHandler}
              width="40%"
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.socialMedia}>
            <Text style={styles.infoText}>{`Or click to go back ;)`}</Text>
            <CustomButton
              text={isLogin ? REGISTER_TEXT.buttonText : LOGIN_TEXT.buttonText}
              onPress={onSecondaryButtonHandler}
              width="40%"
              bgColor={'#3b5998'}
            />
          </View>
        </>
      )}
      <Text style={styles.rights}>All rights reserved &copy;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    position: 'relative',
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
    fontWeight: 'bold',
    marginVertical: 10,
  },
  socialMedia: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rights: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default AuthContent;
