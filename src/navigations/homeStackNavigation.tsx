import React, { FunctionComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import { ADD_CONTACT_SCREEN, HOME_SCREEN } from '../constants/routeNames';
import AddContactScreen from '../screens/addContactScreen';



const Stack = createStackNavigator()


const HomeStackNavigation : FunctionComponent = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={ADD_CONTACT_SCREEN} component={AddContactScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation