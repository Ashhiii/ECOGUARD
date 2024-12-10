import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  navigation.navigate("Home");

}

  return (
    <ImageBackground source={require('../../../src/assets/2.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Email or Phone"
          style={styles.input}
          placeholderTextColor="#e5e5e5"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="#e5e5e5"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#e5e5e5"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.forgotPasswordLink}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>{'Log In'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.registerText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separator} />
        </View>

        <Text style={styles.socialText}>Sign in with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => alert('Google Sign In')}>
            <Image source={require('../../../src/assets/google.jpg')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('Facebook Sign In')}>
            <Image source={require('../../../src/assets/facebook.jpg')} style={styles.socialIcons} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      alignItems: 'center',
      padding: 20,
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.13)',
      borderRadius: 10,
      left: 19,
      width: '90%',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 40,
    },
    input: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 5,
      padding: 15,
      marginBottom: 15,
      color: '#fff',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    eyeIconContainer: {
      position: 'absolute',
      right: 10,
      top: 15,
    },
    button: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    forgotPasswordLink: {
        marginTop: 10,
        alignSelf: 'flex-end', 
    },
      forgotPasswordText: {
        color: '#fff',
        textDecorationLine: 'underline',
        textAlign: 'left', 
      },
    registerLink: {
      marginTop: 10,
    },
    registerText: {
      color: '#fff',
      textDecorationLine: 'underline',
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: '#fff',
    },
    separatorText: {
      marginHorizontal: 10,
      color: '#fff',
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%',
      marginTop: 10,
    },
    socialIcon: {
      width: 50,
      height: 50,
      marginHorizontal: 15,
    },
    socialIcons: {
      width: 75,
      height: 50,
      marginHorizontal: -5,
    },
    socialText: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 10,
    },
  });
  