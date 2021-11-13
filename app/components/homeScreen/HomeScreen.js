import * as React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListCities from '../listCities/ListCities';
import ListContries from '../listConutries/ListCountries';
import GetGpsLocation from '../getGpsLocation/GetGpsLocation';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Messages() {
  return (
    <ImageBackground
      source={{uri: 'https://reactjs.org/logo-og.png'}}
      resizeMode="cover"
    />
  );
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="history">
      <Tab.Screen name="Cities" component={ListCities} />
      <Tab.Screen name="Contries" component={ListContries} />
      <Tab.Screen name="GpsLocation" component={GetGpsLocation} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
