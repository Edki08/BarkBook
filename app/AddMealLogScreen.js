import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { saveLog } from '../utils/storage';

export default function AddMealLogScreen() {
  const [food, setFood] = useState('');
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleSave = async () => {
    if (!food && !amount) {
      Alert.alert('Oops!', 'Please enter meal details.');
      return;
    }

    const entry = {
      date: new Date().toISOString(),
      food,
      amount
    };

    await saveLog('mealLogs', entry);
    Alert.alert('Saved', 'Meal log has been saved!');
    setFood('');
    setAmount('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Food"
        value={food}
        onChangeText={setFood}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />
      <Button title="Save Meal Log" onPress={handleSave} />
      <View style={{ height: 16 }} />
      <Button title="View Meal Logs" onPress={() => navigation.navigate('MealLog')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8
  }
});
