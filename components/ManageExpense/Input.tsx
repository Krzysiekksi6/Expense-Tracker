import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  Controller,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {KeyboardType} from '../../constans/keyboardType';
import {GlobalColors, GlobalStyles} from '../../constans/styles';

type InputProps = PropsWithChildren<{
  label?: string;
  style?: any;
  textInputConfig?: {};
  value?: string;
  onChangeText?: () => {};
  invalid?: boolean;
  
}>;

function Input({
  label,
  style,
  textInputConfig,
  onChangeText,
  value,
  invalid,
}: InputProps) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: GlobalColors.colors.gray,
  },
  input: {
    backgroundColor: GlobalColors.colors.lightGray500,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
