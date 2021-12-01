import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetGpsLocation from './getLocalCases/GetLocalCases';
import {NavigationContainer} from '@react-navigation/native';
import SearchCases from './searchCases/SearchCases';

const BtnNav = TouchableOpacity;

function HomeScreen({navigation: {navigate}}) {
  return (
    <ImageBackground
      style={styles.ImageBackgroundmO}
      source={require('../image/streetWalk.jpg')}
      resizeMode={'cover'}>
      <BtnNav
        style={styles.buttonmO}
        onPress={() => {
          navigate('SearchCases');
        }}>
        <Text style={undefined}>{'SearchCases'}</Text>
      </BtnNav>
      <BtnNav
        style={styles.buttonmO}
        onPress={() => {
          navigate('Home');
        }}>
        <Text style={undefined}>{'Home'}</Text>
      </BtnNav>
      <BtnNav
        style={styles.buttonmO}
        onPress={() => {
          navigate('GetLocalCases');
        }}>
        <Text style={undefined}>{'GetLocalCases'}</Text>
      </BtnNav>
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
