import {Image} from 'react-native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {props} from '../utils/types';

const Card: React.FC<props> = ({cardname, imageUrl}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={imageUrl} style={styles.cardImage} />
      <Text style={styles.cardText}>{cardname}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: '30%',
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
    height: '80%',
  },
  cardText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Card;
