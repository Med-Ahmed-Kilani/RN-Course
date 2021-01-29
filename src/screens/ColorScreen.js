import React from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { useState } from 'react/cjs/react.development';

const ColorScreen = () => {
    const [colors, setColors] = useState([]); 

    return(
        <View>
            <Button title='Add a Color' onPress={()=>{
                setColors([...colors, randomRgb()])
            }}/>
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) =>{
                    return <View style={{width:200, height:200, backgroundColor: item }} />;
            }}
            />
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