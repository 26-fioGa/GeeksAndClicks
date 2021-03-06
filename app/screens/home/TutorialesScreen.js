import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {colorPallete} from '../../data/colorPallete';
import {categoriesList} from '../../data/categoriesList';
import CategoryCard from '../../components/home/CategoryCard';
import LinearGradient from 'react-native-linear-gradient';
import AuthContext from '../../components/auth/context';
import LoadingComponent from '../../components/home/LoadingComponent';

const TutorialesScreen = () => {
  const [username, setUsername] = useState(null);
  const {getToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getToken().then(result => {
      setUsername(result.username);
      setIsLoading(false);
    });
  }, []);

  const renderCategory = ({item}) => (
    <CategoryCard name={item.name} image={item.image} />
  );

  if (isLoading) return <LoadingComponent />;

  return (
    <View style={styles.generalContainer}>
      <LinearGradient
        colors={[
          colorPallete.darkBlue,
          colorPallete.darkGreen,
          colorPallete.fullDarkGreen,
        ]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bienvenido, {username} </Text>
      </LinearGradient>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <FlatList
          data={categoriesList}
          numColumns={2}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
          style={styles.categoryListContainer}
        />
      </SafeAreaView>
    </View>
  );
};

export default TutorialesScreen;

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colorPallete.white,
  },
  welcomeContainer: {
    borderBottomWidth: 0.5,
    borderColor: colorPallete.lightGreen,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    color: colorPallete.white,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  categoryListContainer: {
    margin: 10,
  },
});
