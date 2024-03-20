import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Welcome from './Welcome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function InputName() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const storeUserName = async (value: string) => {
    try {
      await AsyncStorage.setItem('name', name);
    } catch (e) {
      console.log("Error storing username: " + e);
    }
  }
  const handleClick = () => {
    if (name === "") {
      console.log("Empty");
    }
    else {
      console.log(name);
      storeUserName(name);
      navigation.navigate('Welcome');
    }
  }

  const getName = async () => AsyncStorage.getItem('name');

  useEffect(() => {
    getName().then((value) => {
      if (value !== null) {
        console.log('Name already exists: ' + value + ' navigating to Welcome'); 
        navigation.navigate('Welcome');
      }
    });
  });

  return (
    <View style={{ justifyContent: 'center', height: '100%', padding: 10 }}>
      <TextInput style={{
        height: 50,
        borderWidth: 2,
        borderColor: 'grey',
      }}
        onChangeText={(v) => { setName(v) }}
        placeholder='Enter your name..'
      />
      <View style={styles.buttonStyles}>
        <Button title='submit' onPress={handleClick} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    alignItems: 'center',
    marginTop: 4,
  }
})