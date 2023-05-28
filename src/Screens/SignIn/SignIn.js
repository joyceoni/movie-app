 // import React, { useContext } from 'react'; //
import { View, Text, StyleSheet,Dimensions, Image,} from 'react-native';
import CustomInput from '../../../src/component/CustomInput'
import CustomButton from '../../../src/component/CustomButton/CustomButton'
import mapnaija from "../../../assets/Images/mapnaija.png"
import { ScrollView } from 'react-native-gesture-handler';
  // import { AuthContext } from '../../context/AuthContext';//
const SignIn = ({navigation}) => {
  const {height,width} = Dimensions.get('window');

    const [username, setUsername] = ('')
    const [password, setPassword] = ('')
    const onSignInPressed =()=> {
      console.warn ('sign in');
      navigation.navigate("home")
    }
    const onForgotPressed=()=>{
      console.warn('forgot password')
      navigation.navigate("reset")
    }
    const onSignUpPressed=()=>{
      console.warn('forgot password')
      navigation.navigate("reg")
    }
const onSignInGooglePressed = () => console.warn("google")

     // const val = useContext(AuthContext); //



    
  return (
    <ScrollView height={height} width={width} align='center' >
      <View >
        
        <Text style={{fontSize:20,textAlign:"center", top:80}}>Welcom Back 
        <Text style={{color:"green"}} > Sign in  </Text></Text>
         <Image  source={mapnaija}
       style={styles.signImg}
      resizeMode='contain'
     
      />
      </View>
    <View style={styles.SignInCover}>
<Text></Text>
<CustomInput

placeholder='username'
value={username}
setValue={setUsername}/>
       
       <CustomInput
placeholder='Password'
value={password}
setValue={setPassword}
secureTextEntry={true}/>
 <CustomButton
 text="FORGOT PASSWORD?"
 type="TERTIARY"
 onPress={onForgotPressed}
 /> 
  <CustomButton
 text="Sign In"
 onPress={onSignInPressed}

 /> 
   <CustomButton
 text="Sign In with Your Google Account "
 onPress={onSignInGooglePressed}
 />
  <CustomButton
 text="don't Have an account sigin" 
 onPress={ onSignUpPressed}
 type='Tertiary'

 /> 

</View>
     
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    SignInCover: {
    backgroundColor:"#FAF9F6",
    height: 400,
    width:350,
    bottom:50,
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

export default SignIn;
