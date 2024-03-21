// The app asks for my name when I open it for first time, remembers it and shows “Hey <my_name>” when I close and open it afterwards
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';

type Props = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ route,navigation }: { route: { params: { username: string } },navigation:Props }) {
  
    const handleHome=()=>{
        console.log("Main Tab")
        navigation.push('Main');
    }
    const handleName=()=>{
        navigation.replace('InputName');
    }

    return (
        // center the text
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Text style={{fontWeight:'bold',fontSize:30}}>Hey {route.params.username}</Text>
            <View style={styles.homeButton}>
                <Button title="Go To Home" onPress={handleHome}/>
            </View>
            <View style={styles.updateNameButton}>
            <Button title="Edit Name" onPress={handleName}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    homeButton:{
        marginTop:50,
    },
    updateNameButton:{
        margin:10,
    },
})