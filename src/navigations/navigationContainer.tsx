import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import TabNavigation from './toptabNavigation';
// import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigation from './homeStackNavigation';
import { View } from 'react-native';

const NavigationWrapper = () =>{
  return(
    <View>
      {/* <StatusBar style="light" translucent={false} backgroundColor="green" /> */}
      <TabNavigation />
      {/* <HomeStackNavigation /> */}
    </View>
  )
}

export default NavigationWrapper