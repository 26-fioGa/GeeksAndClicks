import * as React from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import TutorialCard from '../../components/home/TutorialCard';
import {tutorialsList} from '../../data/tutorialsList';
import {colorPallete} from '../../data/colorPallete';
import URL from '../../data/baseURLAPI';

export default function TutorialesListScreen({route}) {
  const [data, setData] = React.useState(null);

  React.useMemo(() => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(
      `${URL}/api/post/tipocategoria?tipo=0&categoria=${route.params.name}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setData(result.body);
      })
      .catch(error => console.log('error', error));
  }, []);

  const renderTutorial = ({item}) => (
    <TutorialCard
      imagen={item.imagen}
      titulo={item.titulo}
      contenido={item.text}
      video={item.video}
    />
  );
  return (
    <View style={styles.tutorialesListContainer}>
      <Text style={styles.tituloCategoriaList}>{route.params.name}</Text>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          width: '100%',
          height: '93%',
          padding: 15,
        }}>
        <FlatList
          data={data}
          renderItem={renderTutorial}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  tutorialesListContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    alignItems: 'flex-start',
    paddingBottom: 80,
  },
  tituloCategoriaList: {
    fontSize: 20,
    fontWeight: '400',
    color: colorPallete.darkGreen,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
});
