
import { SHADOWS,COLORS,SIZES} from '../constants/theme'
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native'
import React from 'react'
import HomeMoviesCard from '../card/HomeMoviesCard'
import useFetch from '../../hook/useFetch'


const HomeMovies = () => {
 
    const {data,isLoading, error} = useFetch("search ", {
        type: 'movie',
        query: 'turning red',
        limit: '20'
    }
    );


  return (
    <View style={styles.container}>

        {isLoading ? (
            <ActivityIndicator/>

        ): error ? (
            <Text>something dey happen </Text>
        ): (
            data?.map ((movie) => (
                 <HomeMoviesCard
                 movie={movie}
              
                 />
            ))
        )

        }
     

    </View>
  )
}

export default HomeMovies

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
    }


})