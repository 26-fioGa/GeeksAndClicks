import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Text, Alert, ScrollView, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {colorPallete} from '../../data/colorPallete';
import {useNavigation} from '@react-navigation/native';
import {usernameValidator} from '../../helpers/usernameValidator';
import {passwordValidator} from '../../helpers/passwordValidator';
import {confirmPasswordValidator} from '../../helpers/confirmPasswordValidator';
import URL from '../../data/baseURLAPI';
import AuthContext from './context';
import {launchImageLibrary} from 'react-native-image-picker';

export default function RegisterForm() {
  const navigation = useNavigation();
  const [response, setResponse] = React.useState(null);
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: '',
  });
  const {signIn} = useContext(AuthContext);

  useEffect(() => {}, [username, password, confirmPassword]);

  const onSignUpPressed = async () => {
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = confirmPasswordValidator(
      password.value,
      confirmPassword.value,
    );

    if (usernameError || passwordError || confirmPasswordError) {
      setUsername({...username, error: usernameError});
      setPassword({...password, error: passwordError});
      setConfirmPassword({...confirmPassword, error: confirmPasswordError});
    } else {
      var formdata = new FormData();
      formdata.append('username', username.value);
      formdata.append('name', username.value);
      formdata.append('password', password.value);
      if (response) {
        formdata.append('image', {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        });
      }

      var requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formdata,
        redirect: 'follow',
      };

      await fetch(`${URL}/api/user`, requestOptions)
        .then(res => res.json())
        .then(resData => {
          if (resData.status == 201) {
            Alert.alert('Registro Exitoso', 'Bienvenido ' + username.value, [
              {text: 'OK', onPress: () => signIn(resData, username.value)},
            ]);
          } else if (resData.status == 500) {
            Alert.alert(
              'Oops! Nombre de usuario existente',
              'Ingresa un nombre de usuario diferente',
              [{text: 'OK', onPress: () => {}}],
            );
          } else {
            Alert.alert('Ooops! Algo salió mal', 'Inténtalo de nuevo', [
              {text: 'OK', onPress: () => {}},
            ]);
          }
        })
        .catch(error => {
          Alert.alert('Ooops! Algo salió mal', 'Inténtalo de nuevo', [
            {text: 'OK', onPress: () => {}},
          ]);
          console.log(error);
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
        placeholder="Ejemplo: UserGeek"
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
      <TextInput
        style={styles.textInput}
        mode="flat"
        label="Confirmar Contraseña"
        value={confirmPassword.value}
        onChangeText={text => setConfirmPassword({value: text, error: ''})}
        underlineColor={colorPallete.darkGreen}
        activeUnderlineColor={colorPallete.darkGreen}
        secureTextEntry={true}
      />
      <Text style={styles.textError}>{confirmPassword.error}</Text>
      <Button
        icon="camera"
        mode="text"
        color={colorPallete.darkBlue}
        onPress={() =>
          launchImageLibrary(
            {
              selectionLimit: 0,
              mediaType: 'photo',
              includeBase64: false,
            },
            setResponse,
          )
        }>
        Agregar Imagen
      </Button>

      {response?.assets &&
        response?.assets.map(({uri}) => (
          <View key={uri} style={styles.image}>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={styles.imagen}
              source={{uri: uri}}
            />

            <Button
              icon="delete"
              mode="text"
              color={colorPallete.red}
              onPress={() => setResponse(null)}>
              Eliminar
            </Button>
          </View>
        ))}
      <Button
        style={styles.button}
        mode="contained"
        color={colorPallete.darkOrange}
        onPress={onSignUpPressed}>
        REGISTRARSE
      </Button>
      <Button
        style={styles.button}
        mode="text"
        color={colorPallete.darkGreen}
        onPress={() => navigation.navigate('Login')}>
        INICIAR SESIÓN
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '75%',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: colorPallete.white,
    color: colorPallete.darkText,
    marginTop: 5,
  },
  button: {
    width: '70%',
    marginTop: 10,
    borderRadius: 20,
    fontSize: 18,
  },
  textError: {
    color: colorPallete.red,
    fontSize: 12,
  },
  imagen: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 50,
  },
});
