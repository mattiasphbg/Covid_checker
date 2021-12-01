import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CitiesCases from './components/CitiesCases';
import ContriesCases from './components/CountriesCases';

const Tab = createBottomTabNavigator();

function SearchCases() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="City" component={CitiesCases} />
      <Tab.Screen name="Contries" component={ContriesCases} />
    </Tab.Navigator>
  );
}

export default SearchCases;
