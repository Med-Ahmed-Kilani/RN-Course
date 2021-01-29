import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';

const ColorCounter = (props) => {
    return <View>
        <Text>{props.color}</Text>
        <Button
            title={'More '+props.color}
        />
        <Button
            title={'Less '+props.color}
        />
    </View>;
} 

export default ColorCounter;