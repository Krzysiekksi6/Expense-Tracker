import React, {useContext} from 'react';
import {createUser, login} from '../util/auth';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auth-context';
import AuthContent from '../components/Auth/AuthContent';

const SignUpScreen = () => {
  const authContext = useContext(AuthContext);

  async function loginHandler(email, password) {
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Authentication failed!',
        'Could not register you. Please check your credentials or try again later!',
      );
    }
  }

  return <AuthContent isLogin={false} onAuthenticate={loginHandler} />;
};
export default SignUpScreen;
