import * as React from 'react';
import { colorPallete } from '../../data/colorPallete';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const ContactCard = ({ image, name, phoneNumber, email }) => (
    <View style={styles.mainContainer}>
        <Image source={image} style={styles.image}></Image>
        <LinearGradient colors={[
            colorPallete.darkBlue,
            colorPallete.darkGreen,
            colorPallete.fullDarkGreen,
        ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }} style={styles.contactCard}>
            <Text style={styles.nameContact}>{name}</Text>
            <Text style={styles.descriptionContact}>{email}</Text>
            <Text style={styles.descriptionContact}>{phoneNumber}</Text>
        </LinearGradient>
    </View>
);
export default ContactCard;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 15,
        justifyContent: 'center'
    },
    contactCard: {
        marginHorizontal: 10,
        padding: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 9,
        elevation: 7,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 100,
        alignSelf: 'center',
        paddingLeft: 5

    },
    nameContact: {
        color: colorPallete.white,
        fontWeight: '600',
        fontStyle: 'italic',
        fontSize: 18,
        paddingBottom: 5,
    },
    descriptionContact: {
        color: colorPallete.lightGreen,
        fontSize: 16,
    }
});
