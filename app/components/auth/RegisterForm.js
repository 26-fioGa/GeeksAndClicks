import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text,Alert } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { colorPallete } from '../../data/colorPallete';
import { useNavigation } from '@react-navigation/native';
import { usernameValidator } from '../../helpers/usernameValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { confirmPasswordValidator } from '../../helpers/confirmPasswordValidator'
import URL from '../../data/baseURLAPI';

export default function RegisterForm() {

    const navigation = useNavigation(); 
    const [username,setUsername] = useState({ value: '', error: '' })
    const [password,setPassword] = useState({ value: '', error: '' })
    const [confirmPassword,setConfirmPassword] = useState({ value: '', error: '' })

    useEffect(()=>{},[username,password,confirmPassword])

    const onSignUpPressed = async()=>{

        const usernameError = usernameValidator(username.value)
        const passwordError = passwordValidator(password.value)
        const confirmPasswordError = confirmPasswordValidator(password.value,confirmPassword.value)

        if (usernameError || passwordError || confirmPasswordError) {
            setUsername({ ...username, error: usernameError })
            setPassword({ ...password, error: passwordError })
            setConfirmPassword({ ...confirmPassword, error: confirmPasswordError })
        }else{
            await fetch(`${URL}/api/user`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                      username: username.value,
                      password: password.value
                    })
                }).then(res => res.json()).then(resData =>{
                    if(resData.status == "201"){
                        Alert.alert("Registro Exitoso","Bienvenido "+username.value,
                        [{ text: "OK", onPress: () =>  navigation.navigate('Login') }])
                    }else{
                        Alert.alert("Ooops! Algo salió mal","Inténtalo de nuevo",
                    [{ text: "OK", onPress: () => {} }])
                    }
                  
                }).catch(error =>{
                    Alert.alert("Ooops! Algo salió mal","Inténtalo de nuevo",
                    [{ text: "OK", onPress: () => {} }])
                    console.log(error)});
        }
    }
    
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                mode="flat"
                label="Nombre de usuario"
                value={username.value}
                onChangeText={(text) => setUsername({ value: text, error: '' })}
                placeholder='Ejemplo: UserGeek'
                underlineColor={colorPallete.darkGreen}
                activeUnderlineColor={colorPallete.darkGreen}
            />
            <Text style={styles.textError}>{username.error}</Text>
            <TextInput
                style={styles.textInput}
                mode="flat"
                label="Contraseña"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
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
                onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
                underlineColor={colorPallete.darkGreen}
                activeUnderlineColor={colorPallete.darkGreen}
                secureTextEntry={true}
            />
            <Text style={styles.textError}>{confirmPassword.error}</Text>
            <Button style={styles.button} mode="contained" color={colorPallete.darkOrange} onPress={onSignUpPressed}>
                REGISTRARSE
            </Button>
            <Button style={styles.button} mode="text" color={colorPallete.darkGreen} onPress={() => navigation.navigate('Login')} >
                INICIAR SESIÓN
            </Button>
        </View >
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: '75%',
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        height: 60,
        backgroundColor: colorPallete.white,
        color: colorPallete.darkText,
        marginTop: 15
    },
    button: {
        width: '70%',
        marginTop: 20,
        borderRadius: 20,
        fontSize: 18
    },
    textError: {
        color: colorPallete.red,
    }
});