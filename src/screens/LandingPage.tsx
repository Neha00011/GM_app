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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type LandingPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const {width, height} = Dimensions.get('window');
export default function LandingPage() {
  const navigation = useNavigation<LandingPageNavigationProp>();
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

      <View style={styles.btnstyle}>
        <Button
          buttonName="Get Started"
          onClick={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
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
  btnstyle: {
    width: '90%',
  },
});
