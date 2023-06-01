/* eslint-disable */
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {GlobalColors} from '../../constans/styles';

const CustomInput = ({
  value,
  onUpdateValue,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  isInvalid,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.colors.white500,
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  input: {},
  inputInvalid: {},
});

export default CustomInput;
