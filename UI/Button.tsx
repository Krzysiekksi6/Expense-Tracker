/* eslint-disable */

import {View, Pressable, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../constans/styles';
const Button = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View
          style={[
            styles.button,
            mode === 'flat' && styles.flat,
            mode === 'error' && styles.error,
            mode === 'fb' && styles.facebookButton, 
            mode === 'tw' && styles.twitterButton
          ]}>
          <Text style={[styles.buttonText, 
          mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalColors.colors.red,
  },
  flat: {
    backgroundColor: GlobalColors.colors.blue,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalColors.colors.white500,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
  error: {
    backgroundColor: GlobalColors.colors.error500,
  },

  twitterButton: {
    backgroundColor: '#1da1f2',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Button;
