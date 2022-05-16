import * as React from 'react';
import { Text, View, Image, StyleSheet, Linking } from "react-native";
import { colorPallete } from '../../data/colorPallete';

export default function AcercaDeScreen() {
    return (
        <View style={styles.generalContainer}>
            <Image style={styles.imageAbout} source={require('../../assets/about.png')}/>
            <Text style={styles.textDescription}>Geeks&Clicks es una emergente startup, liderada por un grupo de estudiantes de Tecsup, dedicada al servicio de soporte informático de diversas áreas.</Text>            
            <Text style={styles.textDescription}>Nuestros servicios buscan constantemente superar las expectativas del cliente que nos solicita, sea persona u organización.</Text>            
            <Text style={styles.textDescription}>Para mayor información visita nuestra página web <Text style={styles.url} onPress={() => Linking.openURL('https://emprendimiento2022tecsup.s3.us-west-2.amazonaws.com/index.html')}>presionando aquí</Text></Text>            
            <Image style={styles.imageLogo} source={require('../../assets/logoTradicional.png')}/>

        </View >
    );
}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colorPallete.white,
        alignItems: 'center'
    },
    imageAbout: {
        width: 400,
        height: 400
    },
    imageLogo: {
        width: 250,
        height: 57,
        marginTop: 40
    },
    textDescription: {
        color: colorPallete.darkText,
        paddingHorizontal: 30,
        paddingVertical: 5,
        lineHeight: 20
    },
    url: {
        color: colorPallete.darkBlue,
        fontWeight: '700',
        fontSize: 14
    }
});