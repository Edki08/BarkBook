import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/images/profile-background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Your Pupfile!</Text>
        <Text style={styles.subtext}>Here's where your fur baby's story lives.</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Wag Back Home"
            color="#FF8C42"
            onPress={() => navigation.navigate('Index')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#5D3FD3',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    marginHorizontal: 60,
  },
});
