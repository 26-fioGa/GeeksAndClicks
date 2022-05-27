import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import {Avatar} from 'react-native-paper';
import PersonalPostCard from '../../components/home/PersonalPostCard';
import URL from '../../data/baseURLAPI';
import AuthContext from '../../components/auth/context';
import LoadingComponent from '../../components/home/LoadingComponent';

export default function PerfilScreen() {
  const [data, setData] = useState(null);
  const {getToken, getUserImage} = useContext(AuthContext);
  const [xd, setXd] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [xd1, setXd1] = useState(false);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
    };
    console.log('funciona');
    getToken().then(result => {
      fetch(`${URL}/api/post/user/?user=${result.username}`, requestOptions)
        .then(response => response.json())
        .then(results => {
          setData(results.body);
          setXd(result.username);
          fetch(
            `${URL}/api/user/usuario/username/?usuario=${result.username}`,
            requestOptions,
          )
            .then(response => response.json())
            .then(resultado => {
              var img = resultado.body[0].imagen;
              setUserImage(img);
              setIsLoading(false);
            })
            .catch(error => console.log('error', error));
        })
        .catch(error => console.log('error', error));
    });
  }, [xd1]);

  const renderPersonalPost = ({item}) => (
    <PersonalPostCard
      id={item.id}
      username={item.user}
      titulo={item.titulo}
      contenido={item.text}
      img={item.imagen}
      set={setXd1}
      setI={setIsLoading}
    />
  );

  if (isLoading) return <LoadingComponent />;

  return (
    <View style={styles.generalContainer}>
      <View style={{width: '100%', height: '35%'}}>
        <ImageBackground
          style={styles.perfilBackground}
          imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
          source={require('../../assets/drawerBackground.png')}>
          <Avatar.Image
            style={styles.userImage}
            size={140}
            source={{uri: userImage}}
          />
          <Text style={styles.userName}>{xd}</Text>
        </ImageBackground>
      </View>
      <SafeAreaView style={styles.safeAreaStyle}>
        <FlatList
          data={data}
          renderItem={renderPersonalPost}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    paddingBottom: 80,
  },
  perfilBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  userImage: {
    marginTop: '10%',
  },
  userName: {
    color: colorPallete.white,
    fontSize: 22,
    marginTop: 10,
  },
  safeAreaStyle: {
    justifyContent: 'center',
    width: '100%',
    height: '70%',
    padding: 15,
    backgroundColor: colorPallete.white,
  },
});
