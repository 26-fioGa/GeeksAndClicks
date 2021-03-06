import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostStack from './stacks/PostStack';
import NotificacionesScreen from '../screens/home/NotificacionesScreen';
import NuevoPostScreen from '../screens/home/NuevoPostScreen';
import TutorialesStack from './stacks/TutorialesStack';
import ForoStack from './stacks/ForoStack';
import {colorPallete} from '../data/colorPallete';
import {StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colorPallete.fullDarkGreen,
          borderRadius: 15,
          height: 60,
          padding: 10,
          ...styles.shadow,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Tutoriales') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Foro') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Nuevo Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Notificaciones') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colorPallete.white,
        tabBarInactiveTintColor: colorPallete.lightGreen,
      })}
      initialRouteName="Tutoriales">
      <Tab.Screen
        name="Tutoriales"
        component={TutorialesStack}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Foro"
        component={ForoStack}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Nuevo Post"
        component={NuevoPostScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Perfil"
        component={PostStack}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
