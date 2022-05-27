import * as React from 'react';
import {colorPallete} from '../../data/colorPallete';
import {Card, Title, Paragraph, Button, Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import URL from '../../data/baseURLAPI';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const PersonalPostCard = ({
  id,
  username,
  titulo,
  contenido,
  img,
  set,
  setI,
}) => {
  const navigation = useNavigation();

  const deletePost = ids => {
    console.log(ids);

    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`${URL}/api/post/${ids}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        set(true);

        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <Title style={styles.tituloTutorial}>{titulo}</Title>
          <Paragraph style={styles.contenidoTutorial}>
            {contenido.slice(0, 150) + '...'}
          </Paragraph>
          <Divider style={{marginVertical: 2}} />
          <View style={styles.accionesContainer}>
            <Button
              icon="square-edit-outline"
              mode="text"
              color={colorPallete.darkBlue}
              onPress={() =>
                navigation.navigate('EditPost', {
                  id: id,
                  username: username,
                  titulo: titulo,
                  contenido: contenido,
                  img: img,
                })
              }>
              Editar
            </Button>
            <Button
              icon="delete-outline"
              mode="text"
              color={colorPallete.red}
              onPress={() => deletePost(id)}>
              Eliminar
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
export default PersonalPostCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    shadowColor: '#000',
    marginBottom: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colorPallete.lightGreen,
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
  accionesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
