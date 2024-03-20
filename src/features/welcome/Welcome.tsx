// The app asks for my name when I open it for first time, remembers it and shows “Hey <my_name>” when I close and open it afterwards
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({})