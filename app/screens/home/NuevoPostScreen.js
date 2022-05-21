import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { colorPallete } from '../../data/colorPallete';
import { TextInput, Button } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

export default function NuevoPostScreen() {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const [response, setResponse] = React.useState(null);
  const { open } = state;

  return (
    <View style={styles.generalContainer}>
      <FAB
        style={styles.fab}
        icon="check-circle"
        label='Postear'
        animated
      />
      <Text style={styles.tituloNuevoPost}>CREAR POST</Text>
      <View style={styles.formContainer}>
        <TextInput
          activeUnderlineColor={colorPallete.darkGreen}
          style={styles.formInput}
          label="Título o Asunto General"
          right={<TextInput.Affix text="/50" />}
        />
        <TextInput
          activeUnderlineColor={colorPallete.darkGreen}
          multiline={true}
          numberOfLines={5}
          style={styles.formInput}
          label="Descripción o Detalle"
          right={<TextInput.Affix text="/200" />}
        />
        <Text style={styles.textOpcional}>Si desea puede agregar una imagen referencial</Text>
        <Button icon="camera" mode="text" color={colorPallete.darkBlue} onPress={() => launchImageLibrary({
          selectionLimit: 0,
          mediaType: 'photo',
          includeBase64: false,
        }, setResponse)}>
          Agregar Imagen
        </Button>
        {response?.assets &&
          response?.assets.map(({ uri }) => (
            <View key={uri} style={styles.image}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.imagen}
                source={{ uri: uri }}
              />
              <Button icon="delete" mode="text" color={colorPallete.red} onPress={() => uri = ''}>
                Eliminar
              </Button>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    alignItems: 'flex-start',
    padding: 20,
  },
  tituloNuevoPost: {
    fontSize: 20,
    fontWeight: '400',
    color: colorPallete.darkGreen,
    justifyContent: 'center'
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 5
  },
  formInput: {
    backgroundColor: colorPallete.white,
    marginBottom: 15
  },
  textOpcional: {
    color: colorPallete.darkText,
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 5,
    fontStyle: 'italic'
  },
  imagen: {
    width: 340,
    height: 220,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: colorPallete.darkOrange
  },
});
