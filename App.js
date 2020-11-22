/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import Colors from './src/styles/colors'; 
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      
      <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.HeaderSectionContainer}>
                    <View style={styles.LeftHeaderSectionContainer}>
                      
                    </View>
                    <Text style={styles.label}>Name </Text>
                    <View style={styles.RightHeaderSectionContainer}>
                      
                    </View>

                </View>
                <View style={styles.FooterSectionContainer}>
                  <Text style={styles.label}> Balance </Text>
                </View>
              </View>
        </View>
    
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
  },
 
  sectionContainer: {
    backgroundColor: Colors.profileCameraBG,
    width:Dimensions.get('window').width*0.6,
    
    alignItems:'center',
    alignContent:'center',
    justifyContent:'flex-start',
    borderRadius:20,
  
    
  },
  HeaderSectionContainer  : {
    backgroundColor: Colors.white,
    width:'100%',
    height:scale(90),
    borderRadius: 20,
     alignContent:'center',
    justifyContent:'space-between',
    alignItems:'center',
    
    flexDirection:'row'
   
  

  },
  LeftHeaderSectionContainer  : {
    backgroundColor: Colors.black,
    width:scale(30),
    height:scale(30),
    borderRadius: scale(10),
    margin:30,
    alignItems:'flex-start'

  },
  RightHeaderSectionContainer  : {
    backgroundColor: Colors.black,
    width:scale(30),
    height:scale(30),
    borderRadius: scale(10),
      margin:30,
    alignItems:'flex-end'

  },
  FooterSectionContainer  : {
    backgroundColor: Colors.secondaryBackgroundColor,
    width:'100%',
    height:scale(90),
    borderRadius: 20,
     alignContent:'center',
    justifyContent:'center',
    alignItems:'center'

  },
  label:{
    fontSize: scale(20)

  }
   
  
});

export default App;
