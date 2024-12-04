import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Page1() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../Assets/firstimg.png')}
          style={styles.illustration1}
        />
      </View>

      <View style={styles.midSection}>
        <Image
          source={require('../Assets/secongimg.png')}
          style={styles.illustration2}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration1: {
    height: 400,
    borderTopEndRadius: 30,
    width: 420,
  },
  illustration2: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
  },
  btntext: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '90%',
    padding: 15,
    backgroundColor: '#354169',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
});
