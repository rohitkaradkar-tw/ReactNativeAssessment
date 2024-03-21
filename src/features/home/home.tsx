import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';


const Home = () => {
    const [userName, setUserName] = useState('');
    const [inputText, setInputText] = useState('');

    return (<View>
        <Text>Home Screen</Text>
    </View>);
}

export default Home;