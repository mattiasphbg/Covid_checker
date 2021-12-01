// In App.js in a new project

import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFlipper} from '@react-navigation/devtools';
import HomeScreen from './app/components/HomeScreen';
import SearchCases from './app/components/searchCases/SearchCases';
import GetLocalCases from './app/components/getLocalCases/GetLocalCases';
import LogoTitle from './app/components/logoTitle/LogoTitle';
import DetailsScreen from './app/components/details/Details';

const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
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
        <Stack.Screen name="SearchCases" component={SearchCases} />
        <Stack.Screen name="GetLocalCases" component={GetLocalCases} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
