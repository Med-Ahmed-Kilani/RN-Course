import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const List = () => {

    const friends =[
        {name:"friend #1", age: 23},
        {name:"friend #2", age: 23},
        {name:"friend #3", age: 23},
        {name:"friend #4", age: 23},
        {name:"friend #5", age: 23},
        {name:"friend #6", age: 23},
        {name:"friend #7", age: 23},
        {name:"friend #8", age: 23},
        {name:"friend #9", age: 23},
        {name:"friend #10", age: 23},
        {name:"friend #11", age: 23},
        {name:"friend #12", age: 23},
        {name:"friend #13", age: 23},
        {name:"friend #14", age: 23},
        {name:"friend #15", age: 23},
        {name:"friend #16", age: 23},
    ];

    return(
        <FlatList
            centerContent={true}
            keyExtractor={(friend) => friend.name}
            data={friends}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return <Text style={styles.friend}>Hello {item.name} of age : {item.age}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
    },
    friend: {
        width:'60%',
        marginVertical: 20,
        fontSize: 20,
        fontStyle: 'italic',
        borderWidth:1,
    }
});

export default List;
