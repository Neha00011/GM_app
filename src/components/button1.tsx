import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {props} from '../utils/types';

const Button: React.FC<props> = ({buttonName, onClick}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onClick}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#354169',
    borderRadius: 30,
    justifyContent: 'center',
    height: 70,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
