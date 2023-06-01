import React, {useContext, useState} from 'react';
import {createUser} from '../util/auth';
import LoadingOverlay from '../UI/LoadingOverlay';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auth-context';
import AuthContent from '../components/Auth/AuthContent';

const SignUpScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!',
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};
export default SignUpScreen;
