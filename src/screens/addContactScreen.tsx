import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import TextInputComponent from '../components/TextInputComponent';

const AddContactScreen : FunctionComponent = () =>{
  return(
    <View style={styles.container}>
        <View style={styles.imageSection}>
          <View style={styles.image}>

          <Text>Here goes image</Text>
          </View >
          <View style={styles.input}>
            <TextInputComponent placeholder='First name' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Last name' onChangeText={()=>{}} />
          <TextInputComponent placeholder='Gender' onChangeText={()=>{}} />
          </View>
        </View>
        <View style={styles.othersInput}>
           <TextInputComponent placeholder='Mobile' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Professionnal' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Private email' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Pro email' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Linkedin profile' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Website' onChangeText={()=>{}} />
            <TextInputComponent placeholder='Group' onChangeText={()=>{}} />


        </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    margin:5,
  },
  imageSection:{
    flexDirection:'row',
  },
  image:{
    width:'60%',
    height:210,
    backgroundColor:'purple',
    borderRadius:5,
  },
  input:{
    width:'40%'
  },
  othersInput:{
    flexDirection:'row',
    flexWrap: 'wrap',
  }
})


export default AddContactScreen