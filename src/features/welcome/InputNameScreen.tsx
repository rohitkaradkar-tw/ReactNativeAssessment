import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { setUserName } from '../../service/UserNameService';
import type { RootStackParamList } from '../../component/RootNavigation';

type Props = NativeStackNavigationProp<RootStackParamList, 'InputName'>;

export default function InputNameScreen({
  navigation
}: {
  route: any;
  navigation: Props;
}) {
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name) {
      console.log(name);
      setUserName(name);
      navigation.replace('Welcome', { username: name });
    }
  };

  return (
    <View style={{ justifyContent: 'center', height: '100%', padding: 10 }}>
      <TextInput
        style={{
          height: 50,
          borderWidth: 2,
          borderColor: 'grey'
        }}
        onChangeText={v => {
          setName(v);
        }}
        placeholder="Enter your name.."
      />
      <View style={styles.buttonStyles}>
        <Button title="submit" onPress={handleClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyles: {
    alignItems: 'center',
    marginTop: 4
  }
});
