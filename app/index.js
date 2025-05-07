import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimatedDog from '../components/AnimatedDog';

export default function IndexScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/images/home-background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to BarkBook!</Text>
        <Text style={styles.subtitle}>Sniff. Wag. Repeat. Let’s Wag On!</Text>

        <View style={styles.dogContainer}>
        <AnimatedDog behavior="dance" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Let’s Wag On!</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2B7A78',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#17252A',
    marginBottom: 20,
    textAlign: 'center',
  },
  dogContainer: {
    height: 300,
    width: '100%',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF8C42',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
