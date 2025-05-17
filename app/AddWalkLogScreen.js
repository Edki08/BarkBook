import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { saveLog } from '../utils/storage';

export default function AddWalkLogScreen() {
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();

  const handleSave = async () => {
    if (!duration && !location) {
      Alert.alert('Oops!', 'Please enter walk details.');
      return;
    }

    const entry = {
      date: new Date().toISOString(),
      duration,
      location
    };

    await saveLog('walkLogs', entry);
    Alert.alert('Saved', 'Walk log has been saved!');
    setDuration('');
    setLocation('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Duration (e.g. 30 mins)"
        value={duration}
        onChangeText={setDuration}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Save Walk Log" onPress={handleSave} />
      <View style={{ height: 16 }} />
      <Button title="View Walk Logs" onPress={() => navigation.navigate('WalkLog')} />
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
