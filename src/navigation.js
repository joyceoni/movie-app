
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home/Home";
import splash from "./Screens/SPLASHSCREEN/Splash"
import SignIn from "./Screens/SignIn/SignIn";
import Register from './Screens/Register/Register'
import ConfirmEmailScreen from "./Screens/ConfirmEmailScreen/ConfirmEmailScreen"
import RepeatPasswordScreen from "./Screens/ResetPassword/ResetPassword";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="spl" component={splash}/>
      <Stack.Screen name="sign" component={SignIn} />
      <Stack.Screen name="confirm" component={ ConfirmEmailScreen} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="reg" component={Register} />
      <Stack.Screen name="reset" component={RepeatPasswordScreen } />
     
     

    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default Navigation;