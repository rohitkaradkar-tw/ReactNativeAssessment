import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native/types';

export const PrimaryButton = () => {
  return (
    <Pressable onPress={() => {}}>
      <View style={[styles.cartButton, styles.addButtonColor]}>
        <Text style={styles.cartText}> {'Edit'}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 35
  },
  removeButtonColor: {
    backgroundColor: '#b4c6db'
  },
  addButtonColor: {
    backgroundColor: '#5297eb'
  },
  cartText: {
    color: 'white',
    textAlign: 'center'
  }
});
