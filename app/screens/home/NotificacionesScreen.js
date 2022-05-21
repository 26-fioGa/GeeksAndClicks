import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { colorPallete } from '../../data/colorPallete';
import { notificacionesList } from '../../data/notificacionesList';
import NotificacionCard from '../../components/home/NotificacionCard';

export default function NotificacionesScreen() {
  const renderNotificacion = ({ item }) => (
    <NotificacionCard userName={item.userName} userImage={item.userImage} action={item.action} />
  );
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titulo}>NOTIFICACIONES</Text>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          width: '100%',
          height: '90%',
          padding: 15,
        }}>
        <FlatList
          data={notificacionesList}
          renderItem={renderNotificacion}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    paddingBottom: 80,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '400',
    color: colorPallete.darkGreen,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center'
  },
});