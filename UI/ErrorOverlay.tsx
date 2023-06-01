import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../constans/styles';
import Button from './Button';

type ErrorOverlayProps = {
  message?: string;
  onConfirm?: () => void;
};
const ErrorOverlay = ({message, onConfirm}: ErrorOverlayProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: GlobalColors.colors.lightGray500,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
  },
});
