import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddHealthLogScreen from './app/AddHealthLogScreen';
import HealthLogScreen from './app/HealthLogScreen';
import AddWalkLogScreen from './app/AddWalkLogScreen';
import WalkLogScreen from './app/WalkLogScreen';
import AddMealLogScreen from './app/AddMealLogScreen';
import MealLogScreen from './app/MealLogScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddHealthLog">
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
