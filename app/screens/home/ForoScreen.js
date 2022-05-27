import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import PostCard from '../../components/home/PostCard';
import URL from '../../data/baseURLAPI';
import LoadingComponent from '../../components/home/LoadingComponent';
import AuthContext from '../../components/auth/context';

export default function ForoScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const {getToken} = useContext(AuthContext);

  /*
  const getUserImage = user => {

    var requestOptions = {
      method: 'GET',
    };

    fetch(
      `${URL}/api/user/usuario/username/?usuario=${user}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(resultado => {
        img = resultado.body[0].imagen;

      })
      .catch(error => console.log('error', error));
 
  };*/

  React.useMemo(() => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(`${URL}/api/post/tipocategoria?tipo=1&categoria=`, requestOptions)
      .then(response => response.json())
      .then(result => {
        /*
        for (let index = 0; index < result.body.length; index++) {
          let a = result.body[index].user
          
          fetch(
            `${URL}/api/user/usuario/username/?usuario=${a}`,
            requestOptions,
          )
            .then(response => response.json())
            .then(resultado => {
              let img = resultado.body[0].imagen;
              
              if(a == resultado.body[0].username){
          
                let b = result.body[index]
                b["imagen"] = img
                arr.push(b)
            
              }
           
            })
            .catch(error => console.log('error', error));
         // a["newKey"] = true;
     
      } */

        setData(result.body);
        setIsLoading(false);
      })
      .catch(error => console.log('error', error));
  }, []);

  const renderPost = ({item}) => (
    <PostCard
      postId={item.id}
      userName={item.user}
      postTitle={item.titulo}
      postContent={item.text}
      postImage={item.imagen}
    />
  );

  if (isLoading) return <LoadingComponent />;

  return (
    <View style={styles.generalContainer}>
      <Text style={styles.tituloForo}>FORO</Text>
      <SafeAreaView
        style={{
          marginTop: 20,
          justifyContent: 'center',
          width: '100%',
          height: '95%',
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={data}
          renderItem={renderPost}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    alignItems: 'flex-start',
    paddingBottom: 80,
  },
  tituloForo: {
    fontSize: 20,
    fontWeight: '400',
    color: colorPallete.darkGreen,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
  },
});
