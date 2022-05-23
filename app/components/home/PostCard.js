import * as React from 'react';
import { colorPallete } from '../../data/colorPallete';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const PostCard = ({ userName, userImage, postTitle, postContent, postImage }) => {
  const navigation = useNavigation();

    const ProfilePicture = props => <Avatar.Image size={24} source={{ uri: userImage }} {...props} />
    return (
        <View>
            <Card style={styles.cardPost}>
                <Card.Title style={styles.username} title={userName} left={ProfilePicture} />
                <Card.Cover source={{ uri: postImage }} />
                <Card.Content>
                    <Title style={styles.tituloPost}>{postTitle}</Title>
                    <Paragraph style={styles.contenidoPost}>{postContent}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <IconButton
                        icon='cards-heart-outline'
                        color={colorPallete.red}
                        size={20}
                    />
                    <Button icon="comment-outline" mode="text" color={colorPallete.darkGreen} onPress={()=> navigation.navigate('DetallePost', {userName: userName, userImage: userImage, postTitle: postTitle, postContent: postContent, postImage: postImage})}>Comentar</Button>
                </Card.Actions>
            </Card>
        </View>
    )
};
export default PostCard;

const styles = StyleSheet.create({
    cardPost: {
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        borderWidth: 1,
        borderColor: colorPallete.lightGreen,
        borderRadius: 20
    },
    username: {
        color: colorPallete.darkBlue,
        fontWeight: '600',
    },
    tituloPost: {
        marginVertical: 5,
        color: colorPallete.darkText
    },
    contenidoPost: {
        color: colorPallete.darkText
    }
})