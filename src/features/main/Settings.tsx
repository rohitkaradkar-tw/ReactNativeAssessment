import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { useTheme } from '@react-navigation/native'
import { ThemeModeContext } from '../../../App';

export default function Settings() {
  const colorThemeContext = useContext(ThemeModeContext)
  const { colors } = useTheme();

  return (
    <View style={{ height: '100%', backgroundColor: colors.background, justifyContent: 'center', padding: 24 }}>
      <Text style={{ color: colors.text }}>Change Theme:</Text>
      <Button title="Set Light Mode" onPress={() => { colorThemeContext.setThemeMode('light') }} />
      <View style={{ marginTop: 12 }}>
        <Button title="Set Dark Mode" onPress={() => { colorThemeContext.setThemeMode('dark') }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})