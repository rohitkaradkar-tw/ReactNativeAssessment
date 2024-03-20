import React from 'react';
import { ActivityIndicator, View } from 'react-native';
export default function LoadingScreen() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <ActivityIndicator size='large' />
        </View>
    )
}