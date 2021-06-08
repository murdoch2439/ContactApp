import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonCircle from '../components/boutons/buttonCircle'
import { MaterialIcons } from '@expo/vector-icons';


const CallsScreen : FunctionComponent = () =>{
  return(
    <View style={styles.container}>
      <Text>Calls Screen</Text>
      <ButtonCircle icon={<MaterialIcons name="add-ic-call" size={24} color="white" />} onPressHandler={()=>{}} />
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',

  },
})

export default CallsScreen