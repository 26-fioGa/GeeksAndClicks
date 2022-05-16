import * as React from 'react';
import { colorPallete } from '../../data/colorPallete';
import { Text, View, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryCard = ({ name, image }) => (
    <TouchableOpacity>
        <View style={styles.categoryContainer}>
            <Image style={styles.imageCategory} source={image}></Image>
            <Text style={styles.textCategory}>{name}</Text>
            <Ionicons name="arrow-forward-circle" size={30} color={colorPallete.darkGreen} style={{marginTop: 10, textAlign: 'right'}}></Ionicons>
        </View>
    </TouchableOpacity>
);
export default CategoryCard;

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: colorPallete.beigeText,
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 10,
        width: 150,
        height: 150,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 6,
        elevation: 7,
    },
    textCategory: {
        color: colorPallete.darkText,
        fontWeight: '600',
        fontSize: 16,
        marginTop: 10,
    },
    imageCategory: {
        marginTop: 10,
        width: 40,
        height: 40,
    }
})