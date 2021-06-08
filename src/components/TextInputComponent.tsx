import React, { FunctionComponent } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

type props ={
  placeholder:string,
  onChangeText:any,
}

const TextInputComponent : FunctionComponent<props> = ({placeholder, onChangeText}) =>{
  return(
    <View style={styles.containter}>
      <TextInput 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containter:{
    
    height:60,
    width:'47%',
    backgroundColor:'red',
    justifyContent:'center',
    paddingHorizontal:10,
    margin:5,
    borderRadius:5,
  }
})

export default TextInputComponent