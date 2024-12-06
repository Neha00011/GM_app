import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Button from '../components/button1';

import InputField from '../components/inputField';
import {useNavigation} from '@react-navigation/native';

export default function RegisterPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [hide, setHide] = useState(true);
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../Assets/backarrow.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Register Now</Text>
      <Text style={styles.subtitle}>Welcome!!</Text>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <InputField buttonName="Full name" />
        </View>
        <View style={styles.input}>
          <InputField buttonName="Email" />
        </View>
        <View style={styles.input}>
          <InputField buttonName="Password" type={hide} />
          <TouchableOpacity
            onPress={() => {
              setHide(!hide);
            }}>
            <Text style={styles.hidebutton}>{hide ? 'show' : 'hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
        />

        <Text style={styles.checkboxText}>
          I accept the <Text style={styles.termsText}>Terms </Text>
          and <Text style={styles.termsText}> Conditions</Text>
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Button buttonName="Sign Up" />
      </View>

      <Text style={styles.loginText}>
        Already Register? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //height: '100%',
    //display: 'flex',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    //justifyContent: 'space-between',
  },
  backButton: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 18,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: 35,
    color: '#354169',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
    color: '#354169',
    marginRight: 30,
    fontWeight: '800',
  },
  inputContainer: {
    marginBottom: 4,
    marginLeft: 20,
  },
  input: {
    backgroundColor: '#354169',
    color: '#FFF',
    fontSize: 16,
    padding: 2,
    borderRadius: 35,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkbox: {
    marginRight: 2,
  },
  checkboxText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '800',
  },
  termsText: {
    color: '#354169',
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 100,
    backgroundColor: '#354169',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 40,
  },
  signupText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    fontWeight: '800',
    marginBottom: 70,
  },
  loginLink: {
    color: '#354169',
    fontWeight: 'bold',
  },
  hidebutton: {
    left: 300,
    top: -40,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
