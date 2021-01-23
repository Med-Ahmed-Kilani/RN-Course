import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageScore, imageSource, name}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{name}</Text>
            <Text>Image Score - {imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({}); 

export default ImageDetail;
