import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

type props ={
  icon?: any,
  onPressHandler:any
}
const ButtonCircle : FunctionComponent<props> = ({icon, onPressHandler}) =>{
  return(
    <View style={styles.container}>

    <TouchableOpacity style={styles.icon} onPress={onPressHandler}>
      {icon}
    </TouchableOpacity>
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    top:'85%',
    alignItems:'flex-end',
    marginRight:20,
  },
  icon:{
    height:70,
    width:70,
    backgroundColor:'red',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    

  }
})


export default ButtonCircle