import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { saveLog } from '../utils/storage';

export default function AddHealthLogScreen() {
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');
  const navigation = useNavigation();

  const handleSave = async () => {
    if (!symptoms && !notes) {
      Alert.alert('Oops!', 'Please enter something to save.');
      return;
    }

    const entry = {
      date: new Date().toISOString(),
      symptoms,
      notes
    };

    await saveLog('healthLogs', entry);
    Alert.alert('Saved', 'Health log has been saved!');
    setSymptoms('');
    setNotes('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Symptoms"
        value={symptoms}
        onChangeText={setSymptoms}
        style={styles.input}
      />
      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        style={styles.input}
      />
      <Button title="Save Health Log" onPress={handleSave} />
      <View style={{ height: 16 }} />
      <Button title="View Saved Logs" onPress={() => navigation.navigate('HealthLog')} />
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
