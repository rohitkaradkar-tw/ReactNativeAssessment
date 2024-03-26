import React from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useThemeContext } from '../../theme/AppTheme';

export default function Settings() {
  const { toggleTheme } = useThemeContext();
  const { colors } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Pressable onPress={toggleTheme}>
        <Text style={{ color: colors.text }}>Change Theme</Text>
      </Pressable>
      <Switch onChange={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    justifyContent: 'center',
    padding: 24
  }
});
