import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ( {placeholder,value,setValue,secureTextEntry }) => {
  return (
    <View style={styles.inputCover}>
      <TextInput 
      style={styles.input}
      value={value}
      placeholder={placeholder} 
      onChangeText = {setValue}
      secureTextEntry={secureTextEntry} />

    </View>
  )
}



const styles = StyleSheet.create({
    inputCover   : {
      backgroundColor:"#F2F3F5",
      width:300,
     borderColor:"white",
     borderRadius:10,
     borderWidth:2,
     paddingHorizontal:10,
     marginVertical:10,
     top:50,
    },
    input   : {
      color:"black",
     padding:10,
    },
  
  
  });

export default CustomInput