import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Appcolor } from '../../utils'
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item }}
        style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor:Appcolor.lightAqua,
    width: ITEM_WIDTH,
  },
  image: {
    width: SLIDER_WIDTH * 0.5,
    height: 200,
    borderRadius: 8,
  }
})

export default CarouselCardItem