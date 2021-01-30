import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const action = (state, action) => {
    switch (action.direction) {
        case 'Increase':
            return state = state+1;
        case 'Decrease':
            return state = state-1;
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, discpatch] = useReducer(action, 0);

    return (
        <View style={styles.card}>
            <Button title='Increase' onPress={() => discpatch({direction: 'Increase'})} />
            <Button title='Decrease' onPress={() => discpatch({direction: 'Decrease'})} />
            <Text>Current count : {state}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default CounterScreen;