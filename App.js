import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Animated, ImageBackground } from 'react-native';

import AdminHome from './src/AdminPage/AdminHome';
import ReportDetails from './src/AdminPage/ReportDetails';
import AdminLogin from './src/AdminPage/AdminLogin';
import AdminDashboard from './src/AdminPage/AdminDashboard';
import WelcomeScreen from './src/AdminPage/WelcomeScreen';

import IntroScreen from './src/OpenIntro/IntroScreen';
import LoginScreen from './src/AuthenticationScreen/Login';
import RegisterScreen from './src/AuthenticationScreen/Register';

  const Stack = createStackNavigator();

  export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const fadeAnim = new Animated.Value(1);

    useEffect(() => {
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          setIsLoading(false);
        });
      }, 3000);
      
      return () => clearTimeout(timer);
    }, []);

    return (
      <NavigationContainer>
        {isLoading ? (
          <ImageBackground
            source={require('./src/assets/loadscreen.jpg')}
            style={styles.container}
          >
            <Animated.View style={{ ...styles.splashContainer, opacity: fadeAnim }}>
              <Image
                source={require('./src/assets/logo.png')}  
                style={styles.logo}
              />
            </Animated.View>
          </ImageBackground>
        ) : (
          <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="SignUp" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="AdminHome" component={AdminHome} options={{ title: 'Admin Dashboard' }}/>
            <Stack.Screen name="ReportDetails" component={ReportDetails} options={{ title: 'Report Details' }}/>
            <Stack.Screen name="AdminLogin" component={AdminLogin} />
            <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> 
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    splashContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    background: {
      flex: 1,
      justifyContent: 'flex-start',
    },
  });


