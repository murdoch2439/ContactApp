import React, { FunctionComponent } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CALLS_SCREEN, CONTACT_SCREEN, DISCUSSION_SCREEN } from '../constants/routeNames';
import DiscussionScreen from '../screens/discussionScreen';
import CallsScreen from '../screens/callsScreen';
import ContactScreen from '../screens/contactScreen';


const Tab = createMaterialTopTabNavigator()


const TabNavigation : FunctionComponent =()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name={DISCUSSION_SCREEN} component={DiscussionScreen} />
      <Tab.Screen name={CALLS_SCREEN} component={CallsScreen} />
      <Tab.Screen name={CONTACT_SCREEN} component={ContactScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation