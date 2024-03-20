// The app asks for my name when I open it for first time, remembers it and shows “Hey <my_name>” when I close and open it afterwards
import { StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen({ route }: { route: { params: { username: string } } }) {
    return (
        // center the text
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Text>Hey {route.params.username}</Text>
        </View>
    )
}