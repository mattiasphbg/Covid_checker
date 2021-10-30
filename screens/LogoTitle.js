import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./hallow_test.jpg')}
    />
  );
}

export default LogoTitle;
