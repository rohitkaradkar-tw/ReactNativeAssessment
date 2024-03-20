import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


export default function InputName() {
    const [name,setName]=useState("");
    const handleClick=()=>{
        if(name===""){
            console.log("Empty");
        }
        else{
            console.log(name);
        }
    }

  return (
    <View style={{justifyContent:'center',height:'100%',padding:10}}>
      <TextInput style={{
        height:50,
        borderWidth:2,
        borderColor:'grey',
      }}
      onChangeText={(v)=>{setName(v)}}
      placeholder='Enter your name..'
      />
      <View  style={styles.buttonStyles}>
      <Button title='submit' onPress={handleClick}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonStyles:{
        alignItems:'center',
        marginTop:4,
    }
})