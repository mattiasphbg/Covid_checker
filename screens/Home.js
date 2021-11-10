import * as React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Messages() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Messssages!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <view>
      <ImageBackground source={require('../Image/')} resizeMode="cover">
        <Tab.Navigator>
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Messages" component={Messages} />
        </Tab.Navigator>
      </ImageBackground>
    </view>
  );
}

export default HomeScreen;
