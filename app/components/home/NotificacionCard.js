import * as React from 'react';
import { colorPallete } from '../../data/colorPallete';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

/* Los props de este card pueden cambiar de acuerdo al servicio pero considero que deberias tomar esto, espero que el servicio este igual :3 */

const NotificacionCard = ({ userName, userImage, action }) => {
    const navigation = useNavigation();
    const titulo = action == 'impulso' ? `Nuevo Impulso` : `Nueva Respuesta`
    const subtitulo = action == 'impulso' ? `${userName} ha impulsado tu post.` : `${userName} ha respondido a tu post.`
    return (
        <View>
            <TouchableOpacity >
                <Card style={styles.card}>
                    <Card.Title
                        title={titulo}
                        subtitle={subtitulo}
                        titleStyle={styles.titulo}
                        left={(props) => <Avatar.Image {...props} size={40} source={{ uri: userImage }} />}
                    />
                </Card>
            </TouchableOpacity>
        </View>
    )
};
export default NotificacionCard;

const styles = StyleSheet.create({
    iconBackground: {
        backgroundColor: colorPallete.lightGreen,
    },
    titulo: {
        color: colorPallete.darkText
    },
    card: {
        borderRadius: 20,
        shadowColor: '#000',
        marginVertical: 5,
        marginHorizontal: 5,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});