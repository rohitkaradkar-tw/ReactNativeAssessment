import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackScreens } from '../../navigation/Screens';
import { useTheme } from '@react-navigation/native';

export const InputNameScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const { colors } = useTheme();
  // TODO : if already name exist navigate to content

  const handleSubmit = () => {
    if (name.length >= 3) {
      // TODO : save name it somewhere
      navigation.navigate(StackScreens.CONTENT);
    }
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={[styles.textInput, { color: colors.text }]}
        onChangeText={setName}
        placeholder="How should we call you ...?"
      />

      <Pressable onPress={handleSubmit}>
        <View style={styles.buttonStyles}>
          <Text style={[{ color: colors.text }]}>Submit</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    height: '100%',
    padding: 10
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'grey'
  },
  buttonStyles: {
    alignItems: 'center',
    marginTop: 4
  }
});
