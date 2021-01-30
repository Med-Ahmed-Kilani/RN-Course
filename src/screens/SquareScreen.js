import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorAdjuster";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 260 || red + change < 0 ? null : setRed(red+change);
                break;
            case 'blue':
                blue + change > 260 || blue + change < 0 ? null : setBlue(blue+change);
                break;
            case 'green':
                green + change > 260 || green + change < 0 ? null : setGreen(green+change);
                break;
            default:
                break;
        }
    };

    console.log(red,green,blue);

    return <View>
        <ColorCounter 
            onIncrease={()=> setColor('red' , COLOR_INCREMENT)} 
            onDecrease={()=> setColor('red' , -1 * COLOR_INCREMENT)}
            color='Red' />
        <ColorCounter 
            onIncrease={()=> setColor('green' , COLOR_INCREMENT)} 
            onDecrease={()=> setColor('green' , -1 * COLOR_INCREMENT)}
            color='Green' />
        <ColorCounter 
            onIncrease={()=> setColor('blue' , COLOR_INCREMENT)} 
            onDecrease={()=> setColor('blue' , -1 * COLOR_INCREMENT)}
            color='Blue' />
        <View style={{height: 70, width: 70, backgroundColor: `rgb(${red},${green},${blue})`}} />
    </View>
};

const styles = StyleSheet.create({
    
});

export default SquareScreen;