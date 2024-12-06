import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Button from '../components/button1';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
export default function landingPage() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {height}]}>
      <Image
        source={require('../Assets/firstimg.png')}
        style={styles.illustration1}
      />

      <Image
        source={require('../Assets/secongimg.png')}
        style={styles.illustration2}
      />

      <Button
        buttonName="Get Started"
        onClick={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  illustration1: {
    height: '40%',
    borderTopEndRadius: 50,
    width: '110%',
    borderCurve: 'circular',
  },
  illustration2: {
    height: '43%',
    width: '43%',
    resizeMode: 'contain',
  },
  btnstyle: {},
});
