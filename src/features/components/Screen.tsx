import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Screen = ({ children }: any) => {
  return <View style={styles.screen}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
