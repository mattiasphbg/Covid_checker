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

function HomeScreen(navigation, props) {
  const {theme} = props;
  return (
    <ImageBackground
      style={styles.ImageBackgroundmO}
      source={require('../image/streetWalk.jpg')}
      resizeMode={'cover'}>
      <Text style={styles.buttonmO}>{'Double click '}</Text>

      <Text style={styles.buttonmO}>{'Double click'}</Text>

      <Text style={styles.buttonmO}>{'Double click'}</Text>
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
    height: 50,
    width: 50,
  },
});

export default HomeScreen;
