import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // NavigationContainer it's a (multiple) screen container
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

// Importing components
import home from './screens/home';
import dataPolicy from './screens/dataPolicy';
import regForm from './screens/regForm';
import mainMenu from './screens/mainMenu';
import pollsDetail from './screens/pollsDetail';



// This Fx will contain the multiple screens
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="regForm" component={regForm} />
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="dataPolicy" component={dataPolicy} />
      <Stack.Screen name="mainMenu" component={mainMenu} />
      <Stack.Screen name="pollsDetail" component={pollsDetail} />
    </Stack.Navigator> 
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
