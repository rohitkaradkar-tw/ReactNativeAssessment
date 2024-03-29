import React, { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
  Pressable,
  Alert
} from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

import { useThemeContext } from '../../theme/AppTheme';
//import { getUserName, setUserName } from '../../service/store';
import { Divider } from 'react-native-paper';
import { useStoreData } from '../../datastore/DataStoreProvider';

export default function Settings() {
  const [switchState, setSwitchState] = useState(false);
  const { toggleTheme } = useThemeContext();
  const { colors } = useTheme();
  const { userName, updateUserName } = useStoreData();
  const [name, setName] = useState(userName);

  const toggleSwitch = () => {
    toggleTheme();
    setSwitchState(!switchState);
  };

  const saveUserName = () => {
    console.log('Save user name: ' + name);
    updateUserName(name);
    Alert.alert('App', 'Name updated successfully', [
      {
        text: 'Close',
        style: 'cancel'
      }
    ]);
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={styles.switch}>
          <Text style={{ color: colors.text }}>Dark Theme</Text>
          <Switch onChange={toggleSwitch} value={switchState} />
        </View>
        <Divider />
        <View style={styles.switch}>
          <TextInput
            value={name}
            style={[styles.textInput, { color: colors.text }]}
            onChangeText={setName}
          />
          <Pressable
            onPress={() => {
              saveUserName();
            }}>
            <Button style={styles.buttonStyles}>Edit</Button>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    padding: 15,
    paddingTop: 20
  },
  card: {
    padding: 20,
    width: '100%',
    borderRadius: 20,
    gap: 10,
    position: 'relative'
  },
  switch: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInput: {
    height: 40,
    width: '70%',
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonStyles: {
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    width: 70,
    backgroundColor: '#5297eb'
  }
});
