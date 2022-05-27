import * as React from 'react';
import {colorPallete} from '../../data/colorPallete';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {View, StyleSheet, TouchableOpacity} from 'react-native';

const TutorialCard = ({titulo, contenido, imagen, video}) => {
  const navigation = useNavigation();
  const r = imagen.slice(0, 4) + 's' + imagen.slice(4);
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TutorialDetalle', {
            titulo: titulo,
            contenido: contenido,
            imagen: imagen,
            video: video,
          })
        }>
        <Card style={styles.cardContainer}>
          <Card.Cover style={styles.image} source={{uri: r}} />
          <Card.Content>
            <Title style={styles.tituloTutorial}>{titulo}</Title>
            <Paragraph style={styles.contenidoTutorial}>
              {contenido.slice(0, 150) + '...'}
            </Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
export default TutorialCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    shadowColor: '#000',
    marginBottom: 15,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tituloTutorial: {
    color: colorPallete.darkBlue,
    fontWeight: '600',
    marginTop: 5,
  },
  contenidoTutorial: {
    color: colorPallete.darkText,
  },
});
