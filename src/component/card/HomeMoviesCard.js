
import React from 'react'

import { SIZES,SHADOWS,COLORS } from '../constants/theme'




import { StyleSheet, Text, View, Image } from 'react-native'

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import boy from '../../../assets/Images/boy.jpeg'

const HomeMoviesCard = ( {text, movie}) => {
  return (
    <TouchableOpacity style={styles.Card_container}>
        <TouchableOpacity style={styles.logoContainer}>

           <Image  source={{uri: (movie.backdrop_path)}}/>
     
      <View style={styles.textContainer}>
        <Text style={styles.movieName} >
            {movie?.title}
        </Text>
        <Text style={styles.movieType}>
        {movie?.title}
        </Text>
      </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default HomeMoviesCard

const styles = StyleSheet.create({

    Card_container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.RED,
      },
      movie_pix:{
        width:50,
        height:50,
      },

      logoContainer: {
        width: 150,
        height: 150,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },

      textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
      },
      movieName: {
        fontSize: SIZES.medium,
        
        color: COLORS.primary,
      },
      movieType: {
        fontSize: SIZES.small + 2,
       
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
      },

})