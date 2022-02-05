import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ProductScreen from './components/productScreen';
import ViewOrders from './components/viewOrder';
import {Appcolor} from '../utils';

const HomeScreen = ({navigation}) => {
  const [display, setDisplay] = useState('product');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <Image
            source={require('../assets/cyclist.png')}
            style={styles.profileImage}
          />
          <View style={styles.notificationContainer}>
            <MaterialIcons name="notifications-none" size={25} color={Appcolor.black}/>
          </View>
        </View>
        <Text style={styles.headerText}>Hello Good morning!</Text>
      </View>
      {display == 'product' ? <ProductScreen viewTrackPackage={() => setDisplay('order')}/> : <ViewOrders trackOrder={() => navigation.navigate('Tracking')} />}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolor.white,
  },
  header: {
    marginTop: '10%',
    paddingHorizontal: 20,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  notificationContainer: {
    backgroundColor: Appcolor.lightAqua,
    borderRadius: 15,
    padding: 10,
  },
  headerText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: Appcolor.black,
  },
});
export default HomeScreen;
