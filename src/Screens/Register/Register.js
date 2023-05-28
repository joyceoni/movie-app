
import { View, Text, StyleSheet,Dimensions, Image,} from 'react-native';
 // import React, { useContext } from 'react'; //
import CustomInput from '../../../src/component/CustomInput'
import CustomButton from '../../../src/component/CustomButton/CustomButton'

import { ScrollView } from 'react-native-gesture-handler';
// import { AuthContext } from '../../context/AuthContext'; //

const SignIn = ({navigation}) => {
  const {height,width} = Dimensions.get('window');

    const [name, setName] = ('')
    const [email, setEmail] = ('')
    const [password, setPassword] = ('')
    const [repeatPassword, setRepeatPassword] = ('')
    const onSignUpPressed =()=> {
      console.warn ('sign in')
      navigation.navigate("confirm")
    }

    const onSignInPressed =()=> {
      console.warn ('sign in')
      navigation.navigate("sign")
    }
    const onPrivacyPressed =()=> {
      console.warn ('privacy')
    }
    const onTermsPressed =()=> {
      console.warn ('Terms')
    }
   
// const {register} = useContext(AuthContext);

  return (
    <ScrollView height={height} width={width} align='center' >
      <View >
        <Text  style={{fontSize:20,textAlign:"center", top:80}}>Create An Account</Text>
     
     
   
      </View>
    <View style={styles.RegCover}>
<Text></Text>
<CustomInput

placeholder='username'
value={name}
setValue={setName}/>
       
    
       <CustomInput
placeholder='Email'
value={email}
setValue={setEmail}/>
             <CustomInput
placeholder='Password'
value={repeatPassword}
setValue={setRepeatPassword}
secureTextEntry={true}/>
       <CustomInput
placeholder='Repeat Password'
value={password}
setValue={setPassword}
secureTextEntry={true}/>



  <Text style={{color:"grey",margin:50,}} onPress={onPrivacyPressed}
  >By siging up you have agree to our <Text style={{color:"green",}}>Terms and Privacy</Text></Text>


  <CustomButton
 text="Sign up"
 onPress= { onSignUpPressed } 
 /> 
  <CustomButton
 text="already have an account?  sigin" 
 onPress={onSignInPressed}
 type='Tertiary'

 /> 

</View>
     
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    RegCover: {
    backgroundColor:"#FAF9F6",
    height: 800,
    width:350,
    top:100,
    left:30,
    borderRadius:20,
    alignItems:"center",
    
    },
    signImg:{
      width:'70%',
      maxWidth:300,
      height:400,
      bottom:50,
      marginLeft:60
      
     
    },
    dha:{
      top:50
    }
  });

export default SignIn;
