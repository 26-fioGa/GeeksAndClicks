import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import { colorPallete } from '../../data/colorPallete';
import { Avatar } from 'react-native-paper';
import PersonalPostCard from '../../components/home/PersonalPostCard';
/* Jalo tutoriales list solo porque se parecen mucho con posts, no es lo mismo */
import { personalPostList } from '../../data/personalPostList';


export default function PerfilScreen() {
  const userImage = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580'
  const userName = 'UnGeek'
  const renderPersonalPost = ({ item }) => (
    <PersonalPostCard titulo={item.titulo} contenido={item.contenido} />
  );
  return (
    <View style={styles.generalContainer}>
      <View style={{ width: '100%', height: '35%' }}>
        <ImageBackground style={styles.perfilBackground} imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} source={require('../../assets/drawerBackground.png')}>
          <Avatar.Image style={styles.userImage} size={140} source={{ uri: userImage }} />
          <Text style={styles.userName}>{userName}</Text>
        </ImageBackground>
      </View>
      <SafeAreaView style={styles.safeAreaStyle}>
        <FlatList
          data={personalPostList}
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
    marginTop: '10%'
  },
  userName: {
    color: colorPallete.white,
    fontSize: 22,
    marginTop: 10
  },
  safeAreaStyle: {
    justifyContent: 'center',
    width: '100%',
    height: '70%',
    padding: 15,
    backgroundColor: colorPallete.white
  }
});
