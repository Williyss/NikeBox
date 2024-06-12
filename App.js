import { ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import Home from "./screens/home/index"
import Details from './screens/details/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home}></stack.Screen>
        <stack.Screen name="details" component={Details}></stack.Screen>
      </stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  cardsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',     
    justifyContent: 'center',
    marginTop: 30,
  },
});
