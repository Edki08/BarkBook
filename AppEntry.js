import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/HomeScreen';
import AddHealthLogScreen from './app/AddHealthLogScreen';
import HealthLogScreen from './app/HealthLogScreen';
import AddMealLogScreen from './app/AddMealLogScreen';
import MealLogScreen from './app/MealLogScreen';
import AddWalkLogScreen from './app/AddWalkLogScreen';
import WalkLogScreen from './app/WalkLogScreen';

const Stack = createNativeStackNavigator();

export default function AppEntry() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddHealthLog" component={AddHealthLogScreen} />
        <Stack.Screen name="HealthLog" component={HealthLogScreen} />
        <Stack.Screen name="AddMealLog" component={AddMealLogScreen} />
        <Stack.Screen name="MealLog" component={MealLogScreen} />
        <Stack.Screen name="AddWalkLog" component={AddWalkLogScreen} />
        <Stack.Screen name="WalkLog" component={WalkLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
