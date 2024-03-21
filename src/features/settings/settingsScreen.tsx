import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const Settings = () => {
    const [userName, setUserName] = useState('');
    const [inputText, setInputText] = useState('');

    return (<View>
        <Text>Settings Screen</Text>
    </View>);
}

export default Settings;