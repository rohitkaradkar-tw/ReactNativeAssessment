// The app asks for my name when I open it for first time, remembers it and shows “Hey <my_name>” when I close and open it afterwards
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen() {
    const [name, setName] = React.useState("");

    async function getName() {
        return await AsyncStorage.getItem('name');
    }

    useEffect(() => {
        getName().then((value) => {
            if (value !== null) setName(value);
        });
    })

    return (
        <View>
            <Text>Welcome {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})