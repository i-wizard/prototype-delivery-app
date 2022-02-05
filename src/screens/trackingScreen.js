import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Swipeable} from 'react-native-gesture-handler';
import SwipeUpDown from 'react-native-swipe-up-down';

import {Appcolor} from '../utils';

// const GOOGLE_MAPS_APIKEY = ' AIzaSyDK9npUjEzE1kTiq9W-NOVhDFhkdMxfk4U';
const GOOGLE_MAPS_APIKEY = 'google_api_key_here';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
let LATITUDE_DELTA = 0.0922;
let val = 0.5;
let receiptNumber = 'SCP9374826473';
const TrackingScreen = ({navigation}) => {
  const swipeRef = useRef(null);
  const coordinates = [
    {
      latitude: 6.8322,
      longitude: 3.6319,
    },
    {
      latitude: 7.1475,
      longitude: 3.3619,
    },
  ];
  const historyData = [
    {
      status: 'In Delivery',
      location: 'Bali, Indonesia',
      image: 'https://store-spaces.nyc3.digitaloceanspaces.com/truck.png',
      time: '00:00pm',
    },
    {
      status: 'Transit - Sending City',
      location: 'Jakarta, Indonesia',
      image: 'https://store-spaces.nyc3.digitaloceanspaces.com/mail.png',
      time: '21:00pm',
    },
    {
      status: 'Send Form Sukabumi',
      location: 'Sukabumi, Indonesia',
      image: 'https://store-spaces.nyc3.digitaloceanspaces.com/box.png',
      time: '19:00pm',
    },
  ];
  let historyItems = [];
  for (let i = 0; i < historyData.length; i++) {
    historyItems.push(
      <View key={i.toString()} style={styles.historyContainer}>
        <View style={styles.mainContent}>
          <View style={styles.historyIconContainer}>
            <Image
              source={{uri: historyData[i].image}}
              style={styles.historyIcon}
            />
          </View>
          <View style={styles.historyInfo}>
            <Text style={styles.trackNumber}>{historyData[i].status}</Text>
            <Text style={styles.trackStatus}>{historyData[i].location}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={{color:"gray"}}>{historyData[i].time}</Text>
        </TouchableOpacity>
      </View>,
    );
  }

  const MINIITEM = (
    <View>
      <MaterialIcons
        style={styles.lineStyle}
        name="horizontal-rule"
        color={'gray'}
        size={40}
      />
      <Text style={{color:"gray"}}>Estimated to arrive in</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>2h 40m</Text>
        <Text style={{...styles.timeText, marginBottom: 10}}>. .</Text>
      </View>
    </View>
  );
  const LESSINFO = (
    <TouchableOpacity
    activeOpacity={.9}
      onPress={() => swipeRef.current.showFull()}
      style={styles.infoArea}>
      {MINIITEM}
    </TouchableOpacity>
  );

  const layerView = [];
  const layerData = [
    {
      bigText: 'Sukabumi, Indonesia',
      smallText: `No Receipt : ${receiptNumber}`,
    },
    {
      bigText: '2,50 USD',
      smallText: 'Postal fee',
    },
    {
      bigText: 'Bali, Indonesia',
      smallText: 'Parcel, 24kg',
    },
  ];
  for (let i = 0; i < 3; i++) {
    layerView.push(
      <View key={i.toString()} style={styles.layer}>
        <Text style={styles.layerBigText}>{layerData[i].bigText}</Text>
        <Text style={styles.layerSmallText}>{layerData[i].smallText}</Text>
      </View>,
    );
  }
  const MOREINFO = (
    <View style={styles.moreInfoArea}>
      {MINIITEM}
      <View style={styles.infoBoard}>{layerView}</View>
    </View>
  );
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 7.1475,
          longitude: 3.3619,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: val,
        }}
        showUserLocation={true}>
        <Marker coordinate={coordinates[0]} title={'Destination'} />
        <Marker coordinate={coordinates[1]} title={'Pickup'} />
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor={Appcolor.black}
          optimizeWaypoints={true}
          // onStart={params => {
          //   console.log(
          //     `Started routing between "${params.origin}" and "${params.destination}"`,
          //   );
          // }}
        />
      </MapView>
      <View style={styles.overlayView}>
        <View style={styles.titleArea}>
          <MaterialIcons
            name="arrow-back-ios"
            size={25}
            color={Appcolor.black}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.titleText}>Tracking Details</Text>
        </View>
        <View style={styles.trackingNumberArea}>
          <View style={styles.trackingNumberContainer}>
            <Text style={styles.trackingNumber}>{receiptNumber}</Text>
          </View>
        </View>
      </View>
      {LESSINFO}
      <SwipeUpDown
        itemFull={
          <View style={styles.moreInfoArea}>
            {MINIITEM}
            <View style={styles.infoBoard}>{layerView}</View>
            <View style={styles.trackHistoryArea}>
              <Text style={styles.trackingHistoryText}>History</Text>
              {historyItems}
            </View>
          </View>
        } // Pass props component when show full
        onShowMini={() => console.log('mini')}
        onShowFull={() => console.log('full')}
        onMoveDown={() => console.log('down')}
        onMoveUp={() => console.log('up')}
        disablePressToShow={false} // Press item mini to show full
        style={styles.swipeContainer} // style for swipe
        hasRef={ref => (swipeRef.current = ref)}
      />
      {/* {LESSINFO} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolor.white,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  infoArea: {
    backgroundColor: Appcolor.white,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  overlayView: {
    position: 'absolute',
    top: '7%',
    // backgroundColor:"red",
    marginHorizontal: 20,
  },
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '65%',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Appcolor.black,
  },
  trackingNumberArea: {
    backgroundColor: Appcolor.primary,
    borderRadius: 52,
    padding: 15,
    marginTop: 20,
    marginLeft: '15%',
  },
  trackingNumberContainer: {
    borderWidth: 1,
    borderColor: Appcolor.black,
    borderRadius: 52,
    padding: 12,
  },
  trackingNumber: {
    textAlign: 'center',
    // fontWeight: 'bold',
    color:Appcolor.black
  },
  lineStyle: {
    alignSelf: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Appcolor.black,
    color:'gray'
  },
  infoBoard: {
    backgroundColor: Appcolor.primary,
    borderRadius: 20,
    padding: 20,
    marginVertical: 15,
  },
  layer: {
    borderBottomColor: '#96823D',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop:5
  },
  layerBigText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Appcolor.black,
  },
  layerSmallText: {
    fontSize: 14,
    marginTop: 5,
  color:"gray"
  },
  swipeContainer: {
    backgroundColor: Appcolor.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 0,
    width: '100%',
    marginTop: 50,
  },
  moreInfoArea: {
    backgroundColor: Appcolor.white,
    // position: 'absolute',
    // bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  trackHistoryArea: {
    marginTop: '10%',
  },
  trackingHistoryText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'gray'
  },
  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  historyIconContainer: {
    backgroundColor: Appcolor.lightAqua,
    borderRadius: 50,
    padding: 10,
    marginRight: '10%',
  },
  historyIcon: {
    height: 30,
    width: 30,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyInfo: {},
  trackStatus:{
    color:'gray'
  },
  trackNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'gray'
  },
});
export default TrackingScreen;
