// In App.js in a new project

import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './screens/Details';
import HomeScreen from './screens/Home';
import LogoTitle from './screens/LogoTitle';
import Footer from './screens/footer/Footer';
import Header from './screens/header/Header';

const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
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
