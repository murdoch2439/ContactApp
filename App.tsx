import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationWrapper from './src/navigations/navigationContainer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/toptabNavigation';
import HomeStackNavigation from './src/navigations/homeStackNavigation';


export default function App() {
  return (
    
    <NavigationContainer>

    
    
    <View style={styles.container}>
      <StatusBar style="light"  backgroundColor="green" />
      
      <HomeStackNavigation />
      
    </View>
    </NavigationContainer>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
