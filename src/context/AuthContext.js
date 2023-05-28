import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import axios from "axios"
import { createContext } from "react"
import { BASE_URL } from "../Config"

 export const AuthContext = createContext() 

const AuthProvider = ({children}) => {

    const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

    const register = (name, email, password) => {
        setIsLoading(true);
    
        axios
          .post(`${BASE_URL}/register`, {
            name, email
        
          })
          .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
          })
          .catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);
          });
      };

    return (
    <AuthContext.Provider value={{
        register,
       isLoading,
       userInfo}}>
        {children}
    </AuthContext.Provider>
) }

export {AuthProvider}