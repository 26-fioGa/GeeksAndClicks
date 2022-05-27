import * as React from 'react';
import {colorPallete} from '../../data/colorPallete';
import {StyleSheet} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import URL from '../../data/baseURLAPI';

const PostCard = ({postId, userName, postTitle, postContent, postImage}) => {
  const navigation = useNavigation();
  const r = postImage.slice(0, 4) + 's' + postImage.slice(4);
  const tex = '';
  const temp = 'Tú y 39 personas más, 45 comentarios ,39 ';

  const ProfilePicture = props => (
    <Avatar.Image
      size={24}
      source={{
        uri: 'https://res.cloudinary.com/riacrdo2/image/upload/v1653087107/default/user_ztsbhy.png',
      }}
      {...props}
    />
  );
  return (
    <View>
      <Card style={styles.cardPost}>
        <Card.Title
          style={styles.username}
          title={userName}
          left={ProfilePicture}
        />
        <Card.Cover source={{uri: r}} />
        <Card.Content>
          <Title style={styles.tituloPost}>{postTitle}</Title>
          <Paragraph style={styles.contenidoPost}>{postContent}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            icon="thumb-up-outline"
            mode="text"
            color={colorPallete.blue}
            size={20}
            onPress={() => {}}>
            {tex}
          </Button>
          <Button
            icon="comment-outline"
            mode="text"
            color={colorPallete.darkGreen}
            onPress={() =>
              navigation.navigate('DetallePost', {
                postId: postId,
                userName: userName,
                userImage:
                  'https://res.cloudinary.com/riacrdo2/image/upload/v1653087107/default/user_ztsbhy.png',
                postTitle: postTitle,
                postContent: postContent,
                postImage: r,
              })
            }>
            Comentar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};
export default PostCard;

const styles = StyleSheet.create({
  cardPost: {
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderWidth: 1,
    borderColor: colorPallete.lightGreen,
    borderRadius: 20,
  },
  username: {
    color: colorPallete.darkBlue,
    fontWeight: '600',
  },
  tituloPost: {
    marginVertical: 5,
    color: colorPallete.darkText,
  },
  contenidoPost: {
    color: colorPallete.darkText,
  },
});
