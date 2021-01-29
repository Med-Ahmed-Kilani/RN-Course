import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorAdjuster";

const SquareScreen = () => {
    return <View>
        <ColorCounter color='Red' />
        <ColorCounter color='Green' />
        <ColorCounter color='Blue' />
        <View style={styles.Square,{backgroundColor:'#FED425'} } />
    </View>
};

const styles = StyleSheet.create({
    Square:{
        height:50,
        width:50,
    },
});

export default SquareScreen;