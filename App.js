import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import List from './src/screens/ListScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from './src/screens/SquareScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ComponentsScreen" component={ComponentsScreen}/>
        <Stack.Screen name="ListScreen" component={List}/>
        <Stack.Screen name="ImageScreen" component={ImageScreen}/>
        <Stack.Screen name="CounterScreen" component={CounterScreen}/>
        <Stack.Screen name="ColorScreen" component={ColorScreen}/>
        <Stack.Screen name="SquareScreen" component={SquareScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;