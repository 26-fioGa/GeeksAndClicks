import * as React from 'react';
import { colorPallete } from '../../data/colorPallete';
import { Card, Title, Paragraph, Button, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const PersonalPostCard = ({ titulo, contenido }) => {
    const navigation = useNavigation();

    return (
        <View>
            <Card style={styles.cardContainer}>
                <Card.Content>
                    <Title style={styles.tituloTutorial}>{titulo}</Title>
                    <Paragraph style={styles.contenidoTutorial}>{contenido.slice(0, 150) + "..."}</Paragraph>
                    <Divider style={{ marginVertical: 2 }} />
                    <View style={styles.accionesContainer}>
                        <Button icon="square-edit-outline" mode="text" color={colorPallete.darkBlue}>Editar</Button>
                        <Button icon="delete-outline" mode="text" color={colorPallete.red}>Eliminar</Button>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
};
export default PersonalPostCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        shadowColor: '#000',
        marginBottom: 15,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: colorPallete.lightGreen,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    tituloTutorial: {
        color: colorPallete.darkBlue,
        fontWeight: '600',
        marginTop: 5
    },
    contenidoTutorial: {
        color: colorPallete.darkText
    },
    accionesContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },


});