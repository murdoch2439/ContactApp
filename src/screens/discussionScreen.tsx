import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonCircle from '../components/boutons/buttonCircle'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const DiscussionScreen : FunctionComponent = () =>{
  return(
    <View style={styles.container}>
      <Text>Discussion Screen</Text>
      

      <ButtonCircle  icon={<MaterialCommunityIcons name="message-plus" size={24} color="white" />} onPressHandler={()=>{}} />
    
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
  },
  
})

export default DiscussionScreen