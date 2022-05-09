import React from 'react';
import { StyleSheet, Image, Text, View } from "react-native";
import { colorPallete } from '../../data/colorPallete';
import RegisterForm from '../../components/auth/RegisterForm';

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.registerImage} source={require('../../assets/registerImage.png')}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.registerTitle}>¡Bienvenido!</Text>
                <Text style={styles.registerText}>Procedamos a crear tu cuenta</Text>
            </View>
            <RegisterForm />
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
    registerImage: {
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 0,
        width: '80%',
        height: '30%',
        marginTop: 30,
    },
    textContainer: {
        width: '70%',
    },
    registerTitle: {
        marginTop: 20,
        textAlign: 'center',
        color: colorPallete.darkGreen,
        fontSize: 22,
        fontWeight: '500',
    },
    registerText: {
        marginTop: 20,
        textAlign: 'center',
        color: colorPallete.darkText,
        fontStyle: 'italic'
    }
});