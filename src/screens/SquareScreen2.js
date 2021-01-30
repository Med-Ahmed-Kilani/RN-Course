import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorAdjuster";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.coloToChange) {
        case 'red':
            return state.red+action.amount > 255 || state.red+action.amount < 0 ? state : { ...state, red: state.red + action.amount};
        case 'blue':
            return state.blue+action.amount > 255 || state.blue+action.amount < 0 ? state : { ...state, blue: state.blue + action.amount};
        case 'green':
            return state.green+action.amount > 255 || state.green+action.amount < 0 ? state : { ...state, green: state.green + action.amount};    
        default:
            return state;
    }
}

const SquareScreen2 = () => {

    const [state, discpatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })


    console.log(state.red,state.green,state.blue);

    return <View>
        <ColorCounter 
            onIncrease={()=> discpatch({coloToChange: 'red', amount: COLOR_INCREMENT})} 
            onDecrease={()=> discpatch({coloToChange: 'red', amount: -COLOR_INCREMENT})}
            color='Red' />
        <ColorCounter 
            onIncrease={()=> discpatch({coloToChange: 'green', amount: COLOR_INCREMENT})} 
            onDecrease={()=> discpatch({coloToChange: 'green', amount: -COLOR_INCREMENT})}
            color='Green' />
        <ColorCounter 
            onIncrease={()=> discpatch({coloToChange: 'blue', amount: COLOR_INCREMENT})} 
            onDecrease={()=> discpatch({coloToChange: 'blue', amount: -COLOR_INCREMENT})}
            color='Blue' />
        <View style={{height: 70, width: 70, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}} />
    </View>
};

const styles = StyleSheet.create({
    
});

export default SquareScreen2;