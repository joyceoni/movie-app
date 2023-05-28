import { View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, fgColor, bgColor, text ,type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.BtnCover, styles[`BtnCover_${type}`], bgColor ? {backgroundColor:bgColor}:{}]}>
      <Text style={[styles.btn, styles[`btn_${type}`], fgColor ? {color:fgColor} : 
    {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    BtnCover: {
   
   marginVertical:5,
   alignItems:"center",
   padding:10,
   top: 50,
   width:150,
   borderRadius:10

    },
    BtnCover_PRIMARY :{
        backgroundColor:'#004225',
    },
    tnCover_PRIMARY :{
      backgroundColor:'white',
      borderColor:"green"
  },
    BtnCover_TERTIARY:{},
    
  btn_TERTIARY:{
    color:"gray",
    fontSize:11
    
  },
  btn_PRIMARY:{
    color:"white"
  },
  btn_SECONDARY:{
    color:"green"

  },
  });

export default CustomButton;