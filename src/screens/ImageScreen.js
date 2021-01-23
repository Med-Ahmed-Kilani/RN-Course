import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail name="Forest" imageSource={require('../../assets/forest.jpg')} imageScore='7'/>
            <ImageDetail name="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore='8'/>
            <ImageDetail name="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={9}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;