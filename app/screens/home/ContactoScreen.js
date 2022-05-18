import * as React from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import ContactCard from '../../components/home/ContactCard';
import { contactsList } from '../../data/contactsList';


export default function ContactoScreen() {

  const renderContact = ({item}) => (
    <ContactCard image={item.image} name={item.name} phoneNumber={item.phoneNumber} email={item.email} />
  );
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.tituloContact}>CONTACTA A UN GEEK</Text>
      <Text style={styles.descriptionContact}>Para un soporte especializado, puedes contactar a cualquier miembro de nuestro equipo, tendrás respuesta inmediata y pondremos en marcha la solución a tu problema.</Text>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <FlatList
          data={contactsList}
          renderItem={renderContact}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
    alignItems: 'flex-start',
    padding: 20
  },
  tituloContact: {
    fontSize: 20,
    fontWeight:'400',
    color: colorPallete.darkGreen,
    marginTop: 10
  },
  descriptionContact: {
    color: colorPallete.darkText,
    lineHeight: 20,
    marginTop: 20,
  }
});

