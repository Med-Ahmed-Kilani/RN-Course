import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('ahmed');
    const [password, setPassword] = useState('');
    return <View>
        <TextInput 
            placeholder='Enter your name' 
            onChangeText={value => setName(value)}
        />
        <TextInput
            placeholder='Enter your password'
            onChangeText={value => setPassword(value)}
        />
        {password.length<5 ? <Text style={{color:'red'}}>Password must have atleast 5 characters!</Text> : null}
        <Text>Welcome {name}</Text>
    </View>;
}

const styles = StyleSheet.create({
    input:{
        
    },
    text:{

    }
})

export default TextScreen;