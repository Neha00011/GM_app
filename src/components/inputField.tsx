import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {props} from '../utils/types';

const InputField: React.FC<props> = ({buttonName, type}) => {
  return (
    <View style={[styles.button]}>
      <TextInput
        secureTextEntry={type}
        style={styles.buttonText}
        placeholder={buttonName}
        placeholderTextColor={'#fff'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#354169',
    borderRadius: 30,
    justifyContent: 'center',
    height: 70,
    width: '99%',
  },
  buttonText: {
    textAlign: 'left',
    padding: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputField;
