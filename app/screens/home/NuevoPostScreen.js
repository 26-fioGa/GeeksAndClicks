import * as React from 'react';
import {Text, View, StyleSheet, Image, AsyncStorage, Alert} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import {TextInput, Button} from 'react-native-paper';
import {FAB} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import URL from '../../data/baseURLAPI';
import AuthContext from '../../components/auth/context';
import {usernameValidator} from '../../helpers/usernameValidator';
import {imageValidator} from '../../helpers/imageValidator';
import LoadingComponent from '../../components/home/LoadingComponent';

export default function NuevoPostScreen({navigation}) {
  const [state, setState] = React.useState({open: false});
  const [username, setUsername] = React.useState(null);
  const [showDelete, setShowDelete] = React.useState(false);
  const [titulo, setTitulo] = React.useState({value: '', error: ''});
  const [descripcion, setDescripcion] = React.useState({value: '', error: ''});
  const onStateChange = ({open}) => setState({open});
  const [response, setResponse] = React.useState(null);
  const {open} = state;
  const {getToken} = React.useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [image, setImage] = React.useState(null);

  getToken().then(result => {
    setUsername(result.username);
    setIsLoading(false);
  });

  React.useEffect(() => {}, [titulo, descripcion, image]);

  const saveData = async () => {
    const tituloError = usernameValidator(titulo.value);
    const descripcionError = usernameValidator(descripcion.value);
    const imageError = imageValidator(response);

    if (tituloError || descripcionError || imageError) {
      setTitulo({...titulo, error: tituloError});
      setDescripcion({...descripcion, error: descripcionError});
      setImage(imageError);
    } else {
      var formdata = new FormData();
      formdata.append('text', descripcion.value);
      formdata.append('titulo', titulo.value);
      formdata.append('tipo', '1');
      formdata.append('categoria', '');
      formdata.append('image', {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      });
      formdata.append('user', username);

      var requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formdata,
        redirect: 'follow',
      };

      await fetch(`${URL}/api/post`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if ((result.status = 201)) {
            Alert.alert('POST creado', 'Revise su publicaci??n ', [
              {
                text: 'OK',
                onPress: () => {
                  setResponse(null);
                  setTitulo({value: '', error: ''});
                  setDescripcion({value: '', error: ''});
                },
              },
            ]);
          } else {
            Alert.alert('Ooops! Algo sali?? mal', 'Int??ntalo de nuevo', [
              {text: 'OK', onPress: () => {}},
            ]);
          }
        })
        .catch(error => {
          Alert.alert('Ooops! Algo sali?? mal', 'Int??ntalo de nuevo', [
            {text: 'OK', onPress: () => {}},
          ]);
          console.log(error);
        });
    }
  };
  if (isLoading) return <LoadingComponent />;
  return (
    <View style={styles.generalContainer}>
      <FAB
        style={styles.fab}
        icon="check-circle"
        label="Postear"
        animated
        onPress={saveData}
      />
      <Text style={styles.tituloNuevoPost}>CREAR POST</Text>
      <View style={styles.formContainer}>
        <TextInput
          activeUnderlineColor={colorPallete.darkGreen}
          style={styles.formInput}
          label="T??tulo o Asunto General"
          value={titulo.value}
          onChangeText={text => setTitulo({value: text, error: ''})}
          right={<TextInput.Affix text="/50" />}
        />
        <Text style={styles.textError}>{titulo.error}</Text>
        <TextInput
          activeUnderlineColor={colorPallete.darkGreen}
          multiline={true}
          numberOfLines={5}
          style={styles.formInput}
          label="Descripci??n o Detalle"
          value={descripcion.value}
          onChangeText={text => setDescripcion({value: text, error: ''})}
          right={<TextInput.Affix text="/200" />}
        />
        <Text style={styles.textError}>{descripcion.error}</Text>
        <Text style={styles.textOpcional}>
          Si desea puede agregar una imagen referencial
        </Text>

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
        {!response && <Text style={styles.textError1}>{image}</Text>}

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
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  formInput: {
    backgroundColor: colorPallete.white,
    marginBottom: 15,
  },
  textOpcional: {
    color: colorPallete.darkText,
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 5,
    fontStyle: 'italic',
  },
  imagen: {
    width: 340,
    height: 220,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: colorPallete.darkOrange,
  },
  textError: {
    color: colorPallete.red,
    fontSize: 12,
  },
  textError1: {
    color: colorPallete.red,
    fontSize: 12,
    textAlign: 'center',
  },
});
