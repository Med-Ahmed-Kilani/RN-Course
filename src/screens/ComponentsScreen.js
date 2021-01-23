import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () =>{
    return(
        <View>
            <Text style={styles.HeaderText} >Getting Started On React Native Cheeers</Text>
            <Text style={styles.PreText}> Hello There I did the Challenge :S </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    HeaderText:{
        fontSize:30,
    },
    PreText:{
        fontSize:20,
    }
});

export default ComponentsScreen;