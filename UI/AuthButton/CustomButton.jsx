/* eslint-disable */
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {GlobalColors} from '../../constans/styles';

const CustomButton = ({
                        onPress,
                        text,
                        type = 'PRIMARY',
                        width = '100%',
                        bgColor = '',
                      }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {width: width},
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: GlobalColors.colors.red,
  },
  container_TERTIARY: {
    borderRadius: 6,
    elevation: 1,
    shadowColor: GlobalColors.colors.lightGray50,
  },
  text: {
    fontWeight: 'bold',
    color: GlobalColors.colors.white500,
  },
  text_TERTIARY: {
    fontWeight: '400',
    fontSize: 12,
    color: GlobalColors.colors.gray,
  },
});

export default CustomButton;
