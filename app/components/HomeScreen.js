import * as React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListCities from './listCities/ListCities';
import ListContries from './listConutries/ListCountries';
import GetGpsLocation from './getGpsLocation/GetGpsLocation';

function HomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.ImageBackgroundmO}
      source={require('../image/streetWalk.jpg')}
      resizeMode={'cover'}>
      <TouchableOpacity
        style={styles.buttonmO}
        onPress={() => {
          navigate('Details', {itemId: 5, otherParam: '242'});
        }}>
        <Text style={undefined}>{'Search'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonmO}
        onPress={() => {
          navigation.navigate('Details', {itemId: 5, otherParam: '24'});
        }}>
        <Text style={undefined}>{'Home'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonmO}
        onPress={() => {
          navigation.navigate('Details', {itemId: 5, otherParam: '4'});
        }}>
        <Text style={undefined}>{'Close'}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackgroundmO: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonmO: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    margin: 2,
  },
});

export default HomeScreen;
