import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';

import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './carousel';
import {Appcolor} from '../../utils';

const data = [
  'https://store-spaces.nyc3.digitaloceanspaces.com/bike.png',
  'https://store-spaces.nyc3.digitaloceanspaces.com/bike.png',
  'https://store-spaces.nyc3.digitaloceanspaces.com/bike.png',
  'https://store-spaces.nyc3.digitaloceanspaces.com/bike.png',
];

const ProductScreen = props => {
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
  const checkIndex = index => {
    setIndex(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          autoplay={false}
          useScrollView={true}
          loop={true}
          onSnapToItem={index => checkIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 8,
            height: 8,
            marginHorizontal: -0,
            backgroundColor: Appcolor.black,
          }}
          containerStyle={{paddingTop: 25}}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          tappableDots={true}
          inactiveDotColor={Appcolor.lightAqua}
          dotColor={Appcolor.black}
        />
      </View>
      <View style={styles.midView}>
        <Text style={styles.midViewText}>Gotten your E-Bike yet?</Text>
        <TouchableOpacity onPress={() => props.viewTrackPackage()} activeOpacity={0.6} style={styles.viewOrderBtn}>
          <Text style={styles.viewOrderText}>View Orders</Text>
          <MaterialIcons
            name="arrow-forward"
            size={20}
            color={Appcolor.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lottieArea}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/biker.json')}
          autoPlay
          loop
        />
        <Text style={styles.lottieText}>
          You too can join our Elite squad of E-Bikers
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
  },
  midView: {
    marginTop: 15,
    backgroundColor: Appcolor.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  midViewText: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '50%',
    color:"gray"
  },
  viewOrderBtn: {
    backgroundColor: Appcolor.black,
    borderRadius: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 30,
  },
  viewOrderText: {
    color: Appcolor.white,
    fontWeight: 'bold',
    marginRight: 10,
  },
  lottieArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  lottie: {
    height: 130,
  },
  lottieText: {
    fontSize: 17,
    maxWidth: '50%',
    color: Appcolor.black,
  },
});
export default ProductScreen;
