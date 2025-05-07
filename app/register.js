import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Register Your Fur Baby</Text>

      <TextInput style={styles.input} placeholder="Owner's Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Address" />
      <TextInput style={styles.input} placeholder="Date of Birth" />
      <TextInput style={styles.input} placeholder="Emergency Contact" />

      <Text style={styles.mfaLabel}>Enable Multi-Factor Authentication (MFA):</Text>
      <View style={styles.mfaOptions}>
        <TouchableOpacity style={styles.mfaButton}>
          <Text style={styles.mfaText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mfaButton}>
          <Text style={styles.mfaText}>SMS</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.registerText}>Register & Wag In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFF0F5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  mfaLabel: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    color: '#333',
  },
  mfaOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  mfaButton: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  mfaText: {
    color: '#fff',
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#FFA07A',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
