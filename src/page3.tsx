import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Page3() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/backarrow.png')}
        style={styles.backButton}
      />

      <Text style={styles.title}>Register Now</Text>
      <Text style={styles.subtitle}>Welcome!!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFF"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFF"
          secureTextEntry
        />
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

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already Register? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backButton: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 50,
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
    marginBottom: 5,
    color: '#354169',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    marginTop: 40,
    color: '#354169',
    marginRight: 30,
    fontWeight: '800',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#354169',
    color: '#FFF',
    fontSize: 16,
    padding: 15,
    borderRadius: 30,
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
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
  },
  loginLink: {
    color: '#354169',
    fontWeight: 'bold',
  },
});
