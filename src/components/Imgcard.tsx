import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Prop} from '../utils/types';

const Imgcard: React.FC<Prop> = ({imageUrl}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.cardtitle}>Lorem Ipsum</Text>
        <Text style={styles.carddescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptates sit esse cumque aliquam incidunt dolor voluptatem
        </Text>
      </View>
      <Image source={imageUrl} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '80%',
    marginLeft: 25,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 5,
    overflow: 'hidden',
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    //shadowRadius: 3,
    //elevation: 5,
    // backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '90%',
  },
  cardtitle: {
    color: 'black',
    padding: 2,
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '900',
  },
  carddescription: {
    color: '#354169',
    padding: 4,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
export default Imgcard;
