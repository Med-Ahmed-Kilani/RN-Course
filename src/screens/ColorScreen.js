import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    return(
        <View>
            <Button title='Add a Color' />
            <View style={{width:200, height:200, backgroundColor:randomRgb()}} />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return 'rgb('+red+','+green+','+blue+')';
}

const styles = StyleSheet.create({
    card:{
        width:200,
        height:200
    }
});

export default ColorScreen;