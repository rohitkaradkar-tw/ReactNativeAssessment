import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { StackScreens } from '../../navigation/Screens';
import { setUserName } from '../../service/store';
import { Screen } from '../components/Screen';
import { useStoreData } from '../../datastore/DataStoreProvider';

export const InputNameScreen = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [name, setName] = useState('');
  const { userName } = useStoreData();

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const storedName = await getUserName();
  //       console.log('User Name: ' + storedName);
  //       if (storedName) {
  //         setName(storedName);
  //         navigation.push(StackScreens.CONTENT);
  //       }
  //     } catch (error) {
  //       console.error('Error retrieving user data:', error);
  //     }
  //   };

  //   getUserData();
  // });

  const handleSubmit = () => {
    setUserName(name);
    navigation.navigate(StackScreens.CONTENT);
  };

  return (
    <Screen>
      {userName ? (
        navigation.replace(StackScreens.CONTENT)
      ) : (
        <>
          <View style={styles.titleBox}>
            <Text style={[styles.title, { color: colors.text }]}>Welcome</Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              onChangeText={setName}
              onSubmitEditing={handleSubmit}
              placeholder="How should we call you ...?"
            />
          </View>
        </>
      )}
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
  },
  screen: {
    justifyContent: 'center',
    height: '100%',
    padding: 20
  },
  buttonStyles: {
    alignItems: 'center',
    height: 40,
    backgroundColor: '#5297eb',
    marginTop: 30
  },
  titleBox: {
    height: 100,
    alignContent: 'center'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
