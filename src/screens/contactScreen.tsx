import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonCircle from '../components/boutons/buttonCircle'
import { FontAwesome5 } from '@expo/vector-icons';
import { ADD_CONTACT_SCREEN } from '../constants/routeNames';


type props ={
  navigation:any,
}

const ContactScreen : FunctionComponent<props> = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text>Contact Screen</Text>
      <ButtonCircle icon={<FontAwesome5 name="user-plus" size={24} color="white" />} onPressHandler={()=>navigation.navigate(`${ADD_CONTACT_SCREEN}`)} />
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,

  },
})

export default ContactScreen