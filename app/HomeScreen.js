import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FloatingMascot from '../components/mascot/FloatingMascot';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome to BarkBook!</Text>
        <Button title="Add Health Log" onPress={() => navigation.navigate('AddHealthLog')} />
        <View style={styles.spacer} />
        <Button title="View Health Logs" onPress={() => navigation.navigate('HealthLog')} />
        <View style={styles.spacer} />
        <Button title="Add Meal Log" onPress={() => navigation.navigate('AddMealLog')} />
        <View style={styles.spacer} />
        <Button title="View Meal Logs" onPress={() => navigation.navigate('MealLog')} />
        <View style={styles.spacer} />
        <Button title="Add Walk Log" onPress={() => navigation.navigate('AddWalkLog')} />
        <View style={styles.spacer} />
        <Button title="View Walk Logs" onPress={() => navigation.navigate('WalkLog')} />
      </ScrollView>
      <FloatingMascot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  spacer: {
    height: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center'
  }
});
