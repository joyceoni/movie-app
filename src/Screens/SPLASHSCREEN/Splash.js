
import { StyleSheet, Text, View,Dimensions, Pressable,Image} from 'react-native';

import mapnaija from "../../../assets/Images/mapnaija.png"


export default function Splash({navigation}) {

  const {height,width} = Dimensions.get('window');

  return (
   
   
    
    <View style={styles.container}>
      <View>
      
      <View
       height={height} width={width}>
        <Image  source={mapnaija}
          style={styles.img}
        resizeMode='contain'
       
        />
      </View>
      </View>
      <View>
        <Pressable style={styles.button} onPress={()=>navigation.navigate("sign")}>
          <Text  style={styles.buttonText}  
            > LOGIN </Text>
        </Pressable>
      </View>
      
      
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004225",
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  button:{
    backgroundColor: "white",
    height: 55,
    width: 300,
    justifyContent: "center",
    borderRadius:35,
   
    borderWidth:1,
    borderColor: "white",
   bottom:80,
  },
buttonText:{
  color: '#004225',
  textAlign:"center",
  
},
img:{
 width:400,
 height:400,
 top: 150,
 marginLeft:20

}

});


