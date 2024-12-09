import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-icons-kit';
import {eyeoff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type LoginPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeoff);
  const navigation = useNavigation<LoginPageNavigationProp>();
  const handleToggle = () => {
    if (type == 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeoff);
      setType('password');
    }
  };
  const {height, width} = Dimensions.get('window');
  return (
    <View style={[styles.container, {height}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../Assets/backarrow.png')}
          style={styles.backbutton}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome!!</Text>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '900'}}>
            Email
          </Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="RT8918351@GMAIL.COM"
            keyboardType="email-address"
            style={styles.input}></TextInput>
        </View>

        <View style={styles.inputBox}>
          <TextInput
            placeholder="password"
            secureTextEntry={type == 'password' ? true : false}
            onPress={handleToggle}
            style={styles.input}></TextInput>
          {type == 'password' ? (
            <TouchableOpacity onPress={() => setType('text')}>
              <Text style={styles.showbtn}>show</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.showbtn}
              onPress={() => setType('password')}>
              <Text>hide</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('HomePage');
        }}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>
      <Text style={styles.socialText}>Log in with</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image source={require('../Assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../Assets/apple.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/5968/5968764.png?ga=GA1.1.2032391902.1733553864&semt=ais_hybrid',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Don`t have an account yet?
        <Text
          style={styles.registerLink}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          {' '}
          Register now
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backbutton: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: -12,
    left: 4,
  },
  title: {
    color: '#354169',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    color: '#354169',
    marginTop: 35,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '900',
    marginRight: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    color: '#555',
  },
  inputBox: {
    borderColor: '#354169',
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 8,
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 2,
    position: 'relative',
  },
  input: {
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#354169',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 30,
  },
  loginText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    fontWeight: '900',
  },
  socialText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  forgotPassword: {
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#354169',
    fontSize: 15,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icon: {
    width: 45,
    height: 45,
    marginHorizontal: 10,
    marginTop: 30,
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    color: '#555',
    fontWeight: '900',
  },
  registerLink: {
    color: '#354169',
    fontWeight: 'bold',
  },
  labelContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    zIndex: 10,
    // elevation: 1,
    position: 'absolute',
    top: 5,
    left: 30,
  },
  showbtn: {
    position: 'absolute',
    right: 10,
    top: -32,
  },
});
