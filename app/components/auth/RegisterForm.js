import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { colorPallete } from '../../data/colorPallete';
import { useNavigation } from '@react-navigation/native';


export default function RegisterForm() {
    const navigation = useNavigation(); 
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                mode="flat"
                label="Nombre de usuario"
                placeholder='Ejemplo: UserGeek'
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
            <TextInput
                style={styles.textInput}
                mode="flat"
                label="Confirmar Contraseña"
                underlineColor={colorPallete.darkGreen}
                activeUnderlineColor={colorPallete.darkGreen}
                secureTextEntry={true}
            />
            <Button style={styles.button} mode="contained" color={colorPallete.darkOrange}>
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
        marginTop: 40,
        borderRadius: 20,
        fontSize: 18
    }
});