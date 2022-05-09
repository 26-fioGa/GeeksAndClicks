import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from 'react-native-paper';
import { colorPallete } from '../../data/colorPallete';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
    const navigation = useNavigation();
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                mode="flat"
                label="Nombre de usuario"
                underlineColor={colorPallete.darkGreen}
                activeUnderlineColor={colorPallete.darkGreen}
            />
            <TextInput
                style={styles.textInput}
                mode="flat"
                label="Contraseña"
                underlineColor={colorPallete.darkGreen}
                activeUnderlineColor={colorPallete.darkGreen}
                secureTextEntry={true}
            />
            <Button style={[styles.button, styles.buttonLogin]} mode="contained" color={colorPallete.darkGreen} onPress={() => navigation.navigate('Home')} >
                INICIAR SESIÓN
            </Button>
            <View style={styles.registerButtonContainer}>
                <Text>¿Aún no tienes una cuenta?</Text>
                <Button style={styles.button} mode="text" color={colorPallete.darkGreen} onPress={() => navigation.navigate('Register')} >
                    REGISTRARSE
                </Button>
            </View>
        </View >
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
        marginTop: 20
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
    }
});