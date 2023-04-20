/* eslint-disable */
import {StyleSheet, View, Text} from 'react-native';
import Button from '../UI/Button';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>$</Text>
        <Text style={styles.headerTitle}>Expense Tracker</Text>
      </View>
      <View style={styles.loginContent}>
        <Text style={styles.loginContentTitle}>Sign In</Text>
        <Text style={styles.greetText}>Hi there! Nice to see you agai</Text>

        <Button>Sign In</Button>
      </View>
      <View style={styles.socialMedia}>
        <Text>or use one of your social profiles</Text>
        <View style={styles.socialMediaButtons}>
          <Button style={styles.socialMediaButton} mode={'tw'}>Twitter</Button>
          <Button style={styles.socialMediaButton} mode={'fb'}>Facebook</Button>
        </View>
        <View style={styles.otherButtons}>
          <Button style={styles.socialMediaButton}>SignUp</Button>
          <Button style={styles.socialMediaButton}>Forgot Password</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  icon: {},
  headerTitle: {},
  loginContent: {},
  loginContentTitle: {},
  greetText: {},
  socialMedia: {},
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  socialMediaButton: {
  },
  otherButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  }
 
});

export default SignInScreen;
