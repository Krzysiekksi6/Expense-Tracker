import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {GlobalColors} from '../constans/styles';
const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={GlobalColors.colors.red} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: GlobalColors.colors.lightGray500,
  },
});
