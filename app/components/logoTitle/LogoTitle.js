import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../../image/hallow_test.jpg')}
    />
  );
}

export default LogoTitle;
