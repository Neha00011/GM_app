import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.heading}>HOME</Text>
        <Image
          source={require('../Assets/navicon.png')}
          style={styles.icon}></Image>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.subHeaderText3}>welcome back....</Text>
        <Text style={styles.headerText}>Hi, Lorem Ipsum</Text>
        <Text style={styles.subHeaderText1}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.subHeaderText2}>
          consectetur adipiscing elit,sed do
        </Text>
        <Text style={styles.temperature}>40°C</Text>
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        {/* GP and Ortho */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../Assets/image1.jpeg')} // Replace with your image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>GP and ORTHO</Text>
        </TouchableOpacity>

        {/* Gynecology */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../Assets/image2.jpeg')} // Replace with your image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>GYNECOLOGY</Text>
        </TouchableOpacity>

        {/* Skin Care */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../Assets/image3.jpeg')} // Replace with your image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>SKIN CARE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  icon: {
    height: 28,
    width: 28,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  header: {
    backgroundColor: '#9391C0',
    padding: 20,
    height: 180,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerText: {
    fontSize: 23,
    fontWeight: '900',
    color: 'black',
  },
  subHeaderText1: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
  subHeaderText2: {
    fontSize: 12,
    color: 'black',
    marginVertical: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  subHeaderText3: {
    fontSize: 12,
    color: 'black',
    marginVertical: 5,
    marginLeft: 15,
  },
  temperature: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
    position: 'absolute',
    right: 20,
    top: 80,
    bottom: 80,
  },
  categories: {
    margin: 20,
  },
  card: {
    height: 180,
    width: '75%',
    marginLeft: 45,
    marginRight: 20,
    marginBottom: 15,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
