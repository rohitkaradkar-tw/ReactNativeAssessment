import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { StackScreens } from '../../navigation/Screens';
import { Screen } from '../components/Screen';

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
    <Screen>
      <View style={styles.container}>
        <TextInput
          style={[styles.textInput, { color: colors.text }]}
          onChangeText={setName}
          onSubmitEditing={handleSubmit}
          placeholder="How should we call you ...?"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 15
  },
  textInput: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 20,
    padding: 15,
    alignSelf: 'center'
  },
  button: {
    borderColor: 'grey',
    borderRadius: 100,
    borderWidth: 1,
    aspectRatio: 1
  }
});
