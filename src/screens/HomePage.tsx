import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Card from '../components/card';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>HOME</Text>
      </View>

      {/* Categories Section */}
      <View style={styles.catagories}>
        <Card
          cardname="GP and ORTHO"
          imageUrl={require('../Assets/image1.jpeg')}
        />

        {/* Gynecology */}
        <Card
          cardname="GYNECOLOGY"
          imageUrl={require('../Assets/image2.jpeg')}
        />

        {/* Skin Care */}
        <Card
          cardname="SKIN CARE"
          imageUrl={require('../Assets/image3.jpeg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 28,
    color: '#354169',
  },
  catagories: {
    height: '90%',
  },
});
