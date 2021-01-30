import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
    <View>
        <Text style={styles.textStyle}>Hey there!</Text>
        <Button 
            title="Go to List Demo" 
            onPress={()=> navigation.navigate('ListScreen')}
        />
        <Button 
            title="Go to Component Demo" 
            onPress={()=> navigation.navigate('ComponentsScreen')}
        />
        <Button 
            title='Go to Image Demo'
            onPress={() => navigation.navigate('ImageScreen')}
        />
        <Button
            title='Go to Counter Demo'
            onPress={() => navigation.navigate('CounterScreen')}
        />
        <Button
            title='Go to Color Demo'
            onPress={() => navigation.navigate('ColorScreen')}
        />
        <Button
            title='Go to Square Demo'
            onPress={() => navigation.navigate('SquareScreen')}
        />
        <Button
            title='Go to Text Demo'
            onPress={() => navigation.navigate('TextScreen')}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 20,
    },
    btn: {
        width: "60%",
        margin: 10,
    }
})

export default HomeScreen;
