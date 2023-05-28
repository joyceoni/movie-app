import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import CustomButton from '../../component/CustomButton/CustomButton'

const Home = () => {


    
  return (
    <View style={styles.homee}>
      <CustomButton
 text="register vote"/> 
    </View>
  )
}


const styles = StyleSheet.create({
  homee:{
    flex: 1
  }

});
export default Home ;




