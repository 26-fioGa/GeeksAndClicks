import * as React from 'react';
import { Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import TutorialCard from '../../components/home/TutorialCard';
import { tutorialsList } from '../../data/tutorialsList';
import { colorPallete } from '../../data/colorPallete';

export default function TutorialesListScreen() {
    const renderTutorial = ({ item }) => (
        <TutorialCard imagen={item.imagen} titulo={item.titulo} contenido={item.contenido} />
    );
    return (
        <View style={styles.tutorialesListContainer}>
            <Text style={styles.tituloCategoriaList}>OPTIMIZACIÓN</Text>
            <SafeAreaView
                style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '90%',
                    padding: 15,
                }}>
                <FlatList
                    data={tutorialsList}
                    renderItem={renderTutorial}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    tutorialesListContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colorPallete.white,
        alignItems: 'flex-start',
        paddingBottom: 80,
    },
    tituloCategoriaList: {
        fontSize: 20,
        fontWeight: '400',
        color: colorPallete.darkGreen,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center' 
    },
});

