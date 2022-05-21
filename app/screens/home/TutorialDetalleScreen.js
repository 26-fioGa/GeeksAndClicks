import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { colorPallete } from '../../data/colorPallete';

export default function TutorialDetalleScreen({ route }) {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imagenTutorial} source={{ uri: route.params.imagen }}></Image>
      <SafeAreaView>
        <ScrollView style={styles.contenidoTutorialContainer}>
          <Text style={styles.tituloTutorial}>{route.params.titulo}</Text>
          <Text style={styles.contenidoTutorial}>{route.params.contenido}</Text>
          <Image
            style={styles.imageLogo}
            source={require('../../assets/logoTradicional.png')}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    paddingBottom: 80,
  },
  contenidoTutorialContainer: {
    margin: 20,
    height: '65%'
  },
  imagenTutorial: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%',
    height: '30%'
  },
  tituloTutorial: {
    marginTop: 15,
    color: colorPallete.darkGreen,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 22,
  },
  contenidoTutorial: {
    color: colorPallete.darkText,
    lineHeight: 20,
    marginTop: 15,
  },
  imageLogo: {
    width: 250,
    height: 57,
    alignSelf: 'center',
    marginVertical: 30,
  },
});