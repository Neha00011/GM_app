import * as React from 'react';
import {View, Text} from 'react-native';
import LandingPage from './src/screens/LandingPage';
import RegisterPage from './src/screens/RegisterPage';
import HomePage from './src/screens/HomePage';
import GPAndOrtho from './src/screens/GPandORTHO';
import LoginPage from './src/screens/LoginPage';
import Gynecology from './src/screens/Gynecology';
import SkinCare from './src/screens/SkinCare';
import ImagePage from './src/screens/ImagePage';
import Pdf from './src/screens/PdfPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined; // No parameters for the LandingPage
  Register: undefined; // No parameters for the RegisterPage
  Login: undefined; // No parameters for the LoginPage
  GPAndOrtho: undefined; // No parameters for the GPAndOrtho
  HomePage: undefined; // No parameters for the HomePage
  Gynecology: undefined; // No parameters for the Gynecology
  SkinCare: undefined; // No parameters for the SkinCare
  Image: undefined; // No parameters for the ImagePage
  Pdf: undefined; // No parameters for the Pdf
};

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="GPAndOrtho" component={GPAndOrtho} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Gynecology" component={Gynecology} />
        <Stack.Screen name="SkinCare" component={SkinCare} />
        <Stack.Screen name="Image" component={ImagePage} />
        <Stack.Screen name="Pdf" component={Pdf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
