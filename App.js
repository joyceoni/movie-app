import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import Navigation from './src/navigation';
// import { Context } from 'react'; //
import Register from './src/Screens/Register/Register'
import HomeMovies from './src/component/Moviespage/HomeMovies';
 // import { AuthProvider } from './src/context/AuthContext'; //
const  App =()=> {
  return (
    
 //<AuthProvider style={{flex:1}}> //
<View style={{flex:1}}>
  
  <HomeMovies/>
  
   </View>
   // </AuthProvider> //
   
   

   
   
  );
}

export default App ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:"100%",
    aspectRatio:1,
  },
  itemContainer:{
    width:"50%",
    padding:1,
  }
});
