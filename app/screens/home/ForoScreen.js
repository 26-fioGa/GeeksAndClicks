import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { colorPallete } from '../../data/colorPallete';
import PostCard from '../../components/home/PostCard';
import { postList } from '../../data/postList';

export default function ForoScreen() {
  const renderPost = ({ item }) => (
    <PostCard userName={item.userName} userImage={item.userImage} postTitle={item.postTitle} postContent={item.postContent} postImage={item.postImage} />
  );
  return (
    <View style={styles.generalContainer}>
      <Text style={styles.tituloForo}>FORO</Text>
      <SafeAreaView
        style={{
          marginTop: 20,
          justifyContent: 'center',
          width: '100%',
          height: '95%',
          paddingHorizontal: 10
        }}>
        <FlatList
          data={postList}
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
    justifyContent: 'center'
  },
})
