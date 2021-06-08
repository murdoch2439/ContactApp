import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import TabNavigation from '../navigations/toptabNavigation';


const HomeScreen : FunctionComponent = () =>{
  return(
    <View style={styles.container}>
      <TabNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default HomeScreen