import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImage}
        source={require('../../assets/loginImage.png')}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.loginText}>
          Haciendo de tus problemas informáticos nuestro compromiso
        </Text>
      </View>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPallete.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  loginImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 0,
    width: '80%',
    height: '30%',
    marginTop: 80,
  },
  textContainer: {
    width: '70%',
  },
  loginText: {
    marginTop: 0,
    textAlign: 'center',
    color: colorPallete.darkText,
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'italic',
  },
});
