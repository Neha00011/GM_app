import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Card from '../components/card';
import images from '../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type GPAndOrthoScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'GPAndOrtho'
>;

export default function GPAndOrtho() {
  const navigation = useNavigation<GPAndOrthoScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={styles.image}
              source={require('../Assets/backarrow.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>GP and ORTHO</Text>
      </View>

      {/* Subheading */}
      <View style={styles.subheading}>
        <Text style={styles.subheadingText}>lorem epsum</Text>
      </View>

      {/* Content Sections */}
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={styles.cardImage}
            />
            <View style={styles.fullcard}>
              <Text style={styles.cardTitle}>IMAGE</Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amets.
              </Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pdf')}>
        <View style={[styles.card, styles.pdfCard]}>
          <View style={styles.cardContent}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={styles.cardImage}
            />
            <View style={styles.fullcard}>
              <Text style={styles.cardTitle}>PDF</Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet.
              </Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  head: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 100,
  },
  image: {
    width: 20,
    height: 20,
    //position: 'absolute',
    top: 15,
    left: -10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    height: 90,
    width: '100%',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#354169',
  },

  viewimage: {
    width: 10,
    height: 10,
    top: -15,
    marginLeft: 55,
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: '#354169',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  pdfCard: {
    backgroundColor: '#f4b400',
  },
  cardContent: {
    alignItems: 'flex-start',
  },
  cardImage: {
    width: 110,
    height: 150,
    borderRadius: 25,
    marginBottom: 10,
  },
  cardTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDescription: {
    marginBottom: 10,
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  fullcard: {
    height: '25%',
    top: -130,
    marginLeft: 130,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#354169',
    marginTop: 20,
    marginBottom: 10,
  },
  subheadingText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: '900',
  },
});
