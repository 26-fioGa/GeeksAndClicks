import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { colorPallete } from '../../data/colorPallete';
import { Avatar, IconButton, Card, Title, Paragraph, TextInput } from 'react-native-paper';

export default function DetallePostScreen({ route }) {
  const ProfilePicture = props => <Avatar.Image size={24} source={{ uri: route.params.userImage }} {...props} />
  const CommentProfilePicture = props => <Avatar.Image size={24} source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464' }} {...props} />
  return (
    <View style={styles.generalContainer}>
      <Image style={styles.imagenPost} source={{ uri: route.params.postImage }}></Image>
      <ScrollView>
        <Card>
          <Card.Title style={styles.username} title={route.params.userName} left={ProfilePicture} />
          <Card.Content>
            <Title>{route.params.postTitle}</Title>
            <Paragraph>{route.params.postContent}</Paragraph>
            <View style={styles.commentsContainer}>
              <Card.Title title='UserStalker666' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis nulla, a tristique libero. Quisque odio tellus, ultricies feugiat placerat id, pharetra non libero.' subtitleNumberOfLines={6} left={CommentProfilePicture} style={styles.commentItem} />
              <Card.Title title='UserStalker666' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis nulla, a tristique libero. Quisque odio tellus, ultricies feugiat placerat id, pharetra non libero.' subtitleNumberOfLines={6} left={CommentProfilePicture} style={styles.commentItem} />
              <Card.Title title='UserStalker666' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis nulla, a tristique libero. Quisque odio tellus, ultricies feugiat placerat id, pharetra non libero.' subtitleNumberOfLines={6} left={CommentProfilePicture} style={styles.commentItem} />
              <View style={styles.commentInputContainer}>
                <TextInput
                  style={styles.commentInput}
                  placeholder='Responde a este post'
                  mode='outlined'
                  activeOutlineColor={colorPallete.darkGreen}
                />
                <IconButton
                  icon="send"
                  color={colorPallete.darkOrange}
                  size={24}
                  onPress={() => console.log('Pressed')}
                />
              </View>

            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    paddingBottom: 80,
  },
  imagenPost: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%',
    height: '30%'
  },
  username: {
    color: colorPallete.darkBlue,
    fontWeight: '600',
  },
  commentsContainer: {
    marginVertical: 10
  },
  commentItem: {
    marginVertical: 2
  },
  commentInputContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    width: '100%', 
    marginTop: 10, 
    alignItems: 'center'
  },
  commentInput: {
    backgroundColor: colorPallete.white,
    width: '95%'
  }
})