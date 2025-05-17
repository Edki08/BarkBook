import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getLogs } from '../utils/storage';

export default function WalkLogScreen() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      const data = await getLogs('walkLogs');
      setLogs(data.reverse());
    };
    loadLogs();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {logs.length === 0 ? (
        <Text style={styles.empty}>No walk logs yet.</Text>
      ) : (
        logs.map((log, index) => (
          <View key={index} style={styles.log}>
            <Text style={styles.date}>Date: {new Date(log.date).toLocaleDateString()}</Text>
            <Text>Duration: {log.duration}</Text>
            <Text>Location: {log.location}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  log: {
    backgroundColor: '#e6f2ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#777'
  }
});
