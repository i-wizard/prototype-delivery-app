import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Appcolor} from '../utils';

const AppIntro = ({navigation}) => {
  let paginatedDots = [];
  for (let i = 0; i < 3; i++) {
    paginatedDots.push(
      <View
        key={i.toString()}
        style={
          i == 0
            ? {...styles.paginatedDots, backgroundColor: Appcolor.black}
            : styles.paginatedDots
        }></View>,
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/strokes.png')}
          style={styles.strokesImage}
        />
      </View>
      <View style={styles.content}>
        <Image
          source={require('../assets/building.png')}
          style={styles.buildingImage}
        />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome To E-Bikes</Text>
          <Text style={styles.smallWelcomeText}>
            Buying Electric bikes just got a lot easier. Try us today.
          </Text>
          <View style={styles.sliderPaginationContainer}>{paginatedDots}</View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Core")} activeOpacity={.6} style={styles.googleButtonContainer}>
        <View style={styles.googleContainer}>
          <Image
            source={require('../assets/google.png')}
            style={styles.googleImage}
          />
        </View>
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have any account?</Text>
        <TouchableOpacity>
            <Text style={styles.footerBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolor.primary,
  },
  imageContainer: {
    marginTop: '1%',
    justifyContent: 'center',
  },
  strokesImage: {
    height: 150,
    width: 150,
    alignSelf: 'flex-end',
  },
  buildingImage: {
    height: 240,
    width: 300,
    alignSelf: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  welcomeContainer: {
    marginTop: '10%',
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: Appcolor.black,
    marginBottom: 10,
  },
  smallWelcomeText: {
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
    color:'gray'
  },
  sliderPaginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  paginatedDots: {
    height: 7,
    width: 7,
    borderRadius: 50,
    backgroundColor: Appcolor.white,
    marginHorizontal: 7,
  },
  googleButtonContainer: {
    backgroundColor: Appcolor.black,
    borderRadius: 52,
    flexDirection: 'row',
    marginTop: '8%',
    marginHorizontal: 40,
    padding: 13,
  },
  googleContainer: {
    backgroundColor: Appcolor.white,
    borderRadius: 50,
    padding: 5,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    color: Appcolor.white,
    fontWeight:'bold',
    marginLeft:'25%',
    alignSelf:"center"
  },
  footer:{
      marginTop:'10%',
      flexDirection:'row',
      justifyContent:"center"
  },
  footerText:{
      fontSize:16,
      color:'gray'
  },
  footerBtnText:{
      fontSize:16,
      marginLeft:5,
      color:Appcolor.black
  }
});

export default AppIntro;
