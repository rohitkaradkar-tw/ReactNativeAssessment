import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useThemeContext } from '../../theme/AppTheme';

export default function Settings() {
  const [switchState, setSwitchState] = useState(false);
  const { toggleTheme } = useThemeContext();
  const { colors } = useTheme();

  const toggleSwitch = () => {
    toggleTheme();
    setSwitchState(!switchState);
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <View style={styles.switch}>
        <Text style={{ color: colors.text }}>Dark Theme</Text>
        <Switch onChange={toggleSwitch} value={switchState} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    justifyContent: 'center',
    padding: 24
  },
  switch: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
