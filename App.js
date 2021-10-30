// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './screens/Details';
import HomeScreen from './screens/Home';
import LogoTitle from './screens/LogoTitle';
import Footer from './screens/footer/Footer';
import Header from './screens/header/Header';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation, route}) => ({
            headerTitle: props => <LogoTitle {...props} />,
            headerShown: false,
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
