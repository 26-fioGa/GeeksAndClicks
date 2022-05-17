import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {colorPallete} from '../../data/colorPallete';
import {useNavigation} from '@react-navigation/native';
import {usernameValidator} from '../../helpers/usernameValidator';
import {passwordValidator} from '../../helpers/passwordValidator';
import URL from '../../data/baseURLAPI';
import AuthContext from './context';

export default function LoginForm() {
  const navigation = useNavigation();
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const {signIn} = useContext(AuthContext);
  /* const a = async()=>{
    const b = await AsyncStorage.getItem("token")
    console.log(b)
    }
    a()*/

  useEffect(() => {}, [username, password]);

  const onSignInPressed = async () => {
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (usernameError || passwordError) {
      setUsername({...username, error: usernameError});
      setPassword({...password, error: passwordError});
    } else {
      await fetch(`${URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then(response => response.json())
        .then(resData => {
          if (resData.status == '200') {
            Alert.alert(
              'Inicio de Sesión Exitoso',
              'Bienvenido ' + username.value,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    signIn(resData,username.value);
                  },
                },
              ],
            );
          } else {
            Alert.alert('Credenciales incorrectas', 'Inténtalo de nuevo', [
              {text: 'OK', onPress: () => {}},
            ]);
          }
        })
        .catch(error => {
          Alert.alert('Ooops! Algo salió mal', 'Inténtalo de nuevo', [
            {text: 'OK', onPress: () => {}},
          ]);
          console.error('Error:', error);
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        mode="flat"
        label="Nombre de usuario"
        value={username.value}
        onChangeText={text => setUsername({value: text, error: ''})}
        underlineColor={colorPallete.darkGreen}
        activeUnderlineColor={colorPallete.darkGreen}
      />
      <Text style={styles.textError}>{username.error}</Text>
      <TextInput
        style={styles.textInput}
        mode="flat"
        label="Contraseña"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        underlineColor={colorPallete.darkGreen}
        activeUnderlineColor={colorPallete.darkGreen}
        secureTextEntry={true}
      />
      <Text style={styles.textError}>{password.error}</Text>
      <Button
        style={[styles.button, styles.buttonLogin]}
        mode="contained"
        color={colorPallete.darkGreen}
        onPress={onSignInPressed}>
        INICIAR SESIÓN
      </Button>
      <View style={styles.registerButtonContainer}>
        <Text>¿Aún no tienes una cuenta?</Text>
        <Button
          style={styles.button}
          mode="text"
          color={colorPallete.darkGreen}
          onPress={() => navigation.navigate('Register')}>
          REGISTRARSE
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '75%',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    height: 60,
    backgroundColor: colorPallete.white,
    color: colorPallete.darkText,
    marginTop: 20,
  },
  button: {
    width: '70%',
    marginBottom: 50,
    borderRadius: 20,
    fontSize: 18,
  },
  buttonLogin: {
    marginTop: 40,
  },
  registerButtonContainer: {
    alignItems: 'center',
  },
  textError: {
    color: colorPallete.red,
  },
});
