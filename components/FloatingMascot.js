import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Image } from 'react-native';

const mascotImage = require('../assets/images/mascot-dog.png'); // Use a placeholder PNG for now

export default function FloatingMascot() {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 600,
          useNativeDriver: true
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true
        })
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.mascot, { transform: [{ translateY: bounceAnim }] }]}>
      <Image source={mascotImage} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mascot: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  }
});
