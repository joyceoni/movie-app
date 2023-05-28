

import { View, Text, StyleSheet,Dimensions, Image,} from 'react-native';
import React from 'react';
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton';
import mapnaija from "../../../assets/Images/mapnaija.png"
import { ScrollView } from 'react-native-gesture-handler';
import { ScriptKind } from 'typescript';

const RepeatPasswordScreen = ({navigation}) => {
  const {height,width} = Dimensions.get('window');

    const [username, setUsername] = ('')
    const [password, setPassword] = ('')
    const onSignInPressed =()=> {
      console.warn ('sign in')
    }
    const onForgotPressed=()=>{
      console.warn('forgot password')
    }
  return (
    <ScrollView height={height} width={width}  align='center' >
      <View >

        <Text style={{fontSize:40,textAlign:"center", top:80}}> Reset Password
      </Text>
    
      </View>
    <View style={styles.SignInCover}>

<CustomInput

placeholder='username'
value={username}
setValue={setUsername}/>
       
     
  <CustomButton
 text="Submit Code"
 onPress={()=>navigation.navigate("")}

 /> 
  <CustomButton
      text="Resend  Code"  />
 <CustomButton
 text="Back To Signin"
 type=''
 onPress={()=>navigation.navigate("")}

 /> 

 

</View>
     
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    SignInCover: {
    backgroundColor:"#FAF9F6",
    height: 400,
   
   top:100,
    width:350,

    left:30,
    borderRadius:20,
    alignItems:"center",
    
    },
    signImg:{
      width:'70%',
      maxWidth:300,
      height:400,
      top: 0,
      marginLeft:60
      
     
    },
    dha:{
      top:50
    }
  });

export default RepeatPasswordScreen;
