import React, {useContext, useState} from 'react';
import {login} from '../util/auth';
import LoadingOverlay from '../UI/LoadingOverlay';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auth-context';
import AuthContent from '../components/Auth/AuthContent';

const SignInScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);
  async function loginHandler(email, password) {
    setIsAuthenticating(true);
    try {
      const responseToken = await login(email, password);
      authContext.authenticate(responseToken);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!',
      );
      console.log(error);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }
  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
};

export default SignInScreen;
