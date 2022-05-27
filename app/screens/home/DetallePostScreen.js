import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import {
  Avatar,
  IconButton,
  Card,
  Title,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import URL from '../../data/baseURLAPI';
import AuthContext from '../../components/auth/context';

export default function DetallePostScreen({route}) {
  const [comment, setComment] = React.useState({value: '', error: ''});
  const [data, setData] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const {getToken} = React.useContext(AuthContext);

  getToken().then(result => setUsername(result.username));

  /*
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  fetch(
    `${URL}'/api/post/8kK-eCLVcSYFMGhi0SyV-/likes`,
    requestOptions,
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    */
  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      post_id: route.params.postId,
      user_id: username,
      titulo: comment.value,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${URL}/api/comment/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        getComments();
        setComment({value: '', error: ''});
      })
      .catch(error => console.log('error', error));
  };

  const ProfilePicture = props => (
    <Avatar.Image size={24} source={{uri: route.params.userImage}} {...props} />
  );
  const CommentProfilePicture = props => (
    <Avatar.Image
      size={24}
      source={{
        uri: 'https://res.cloudinary.com/riacrdo2/image/upload/v1653087107/default/user_ztsbhy.png',
      }}
      {...props}
    />
  );

  const getComments = () => {
    var requestOptions = {
      method: 'GET',
    };
    fetch(
      `${URL}/api/comment/post/?post=${route.params.postId}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setData(result.body);
      })
      .catch(error => console.log('error', error));
  };

  React.useEffect(() => getComments(), []);

  return (
    <View style={styles.generalContainer}>
      <Image
        style={styles.imagenPost}
        source={{uri: route.params.postImage}}></Image>
      <ScrollView>
        <Card>
          <Card.Title
            style={styles.username}
            title={route.params.userName}
            left={ProfilePicture}
          />
          <Card.Content>
            <Title>{route.params.postTitle}</Title>
            <Paragraph>{route.params.postContent}</Paragraph>
            <View style={styles.commentsContainer}>
              {data &&
                data.map((comment, index) => (
                  <Card.Title
                    key={index}
                    title={comment.user_id}
                    subtitle={comment.text}
                    subtitleNumberOfLines={6}
                    left={CommentProfilePicture}
                    style={styles.commentItem}
                  />
                ))}

              <View style={styles.commentInputContainer}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Responde a este post"
                  value={comment.value}
                  onChangeText={text => setComment({value: text, error: ''})}
                  mode="outlined"
                  activeOutlineColor={colorPallete.darkGreen}
                />
                <IconButton
                  icon="send"
                  color={colorPallete.darkOrange}
                  size={24}
                  onPress={saveData}
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
    height: '30%',
  },
  username: {
    color: colorPallete.darkBlue,
    fontWeight: '600',
  },
  commentsContainer: {
    marginVertical: 10,
  },
  commentItem: {
    marginVertical: 2,
  },
  commentInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  commentInput: {
    backgroundColor: colorPallete.white,
    width: '95%',
  },
});
