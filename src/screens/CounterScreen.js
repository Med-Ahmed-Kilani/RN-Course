import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.card}>
            <Button title='Increase' onPress={() => {setCounter(counter+1)}} />
            <Button title='Decrease' onPress={() => {setCounter(counter-1)}} />
            <Text>Current count : {counter}</Text>
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