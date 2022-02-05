import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Appcolor} from '../../utils';

const ViewOrders = props => {
  const [receiptNumber, setReceiptNumber] = useState('');
  const historyData = [
    {
      trackNumber:"SCP9374826473",
      status:"In the process",
      image:"https://store-spaces.nyc3.digitaloceanspaces.com/box.png"
    },
    {
      trackNumber:"SCP6653728497",
      status:"In delivery",
      image:"https://store-spaces.nyc3.digitaloceanspaces.com/truck.png"
    },
  ]
  let historyItems = [];
  for (let i = 0; i < historyData.length; i++) {
    historyItems.push(
      <View key={i.toString()} style={styles.historyContainer}>
        <View style={styles.mainContent}>
          <View style={styles.historyIconContainer}>
            <Image
              source={{uri:historyData[i].image}}
              style={styles.historyIcon}
            />
          </View>
          <View style={styles.historyInfo}>
            <Text style={styles.trackNumber}>{historyData[i].trackNumber}</Text>
            <Text style={styles.trackStatus}>{historyData[i].status}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="arrow-forward-ios" size={20} color={Appcolor.black}/>
        </TouchableOpacity>
      </View>,
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.trackingBoard}>
        <Text style={styles.trackingBoardTitle}>Track Your Package</Text>
        <Text style={styles.trackingBoardText}>
          Enter the receipt number that has been given by the officer.
        </Text>
        <TextInput
          value={receiptNumber}
          placeholder="Enter the receipt number"
          placeholderTextColor={Appcolor.black}
          style={styles.input}
          onChangeText={val => setReceiptNumber(val)}
        />
        <TouchableOpacity onPress={() => props.trackOrder()} style={styles.trackBtn}>
          <Text style={styles.trackText}>Track now</Text>
          <MaterialIcons
            name="arrow-forward"
            size={25}
            color={Appcolor.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.trackHistoryArea}>
        <Text style={styles.trackingHistoryText}>Tracking History</Text>
        {historyItems}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolor.white,
    marginTop: '5%',
    paddingHorizontal: 20,
  },
  trackingBoard: {
    backgroundColor: Appcolor.primary,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  trackingBoardTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: Appcolor.black,
  },
  trackingBoardText: {
    fontSize: 16,
    marginTop: 7,
    lineHeight: 25,
    marginBottom: 12,
    color:'gray'
  },
  trackBtn: {
    backgroundColor: Appcolor.black,
    borderRadius: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 30,
  },
  trackText: {
    color: Appcolor.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  input: {
    backgroundColor: Appcolor.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 28,
    borderWidth: 1,
    marginVertical: 15,
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
    color:"gray"
  },
  trackNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'gray'
  },
});
export default ViewOrders;
