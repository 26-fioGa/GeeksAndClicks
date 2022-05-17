import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TutorialesScreen from '../screens/home/TutorialesScreen';
import ForoScreen from '../screens/home/ForoScreen';
import PerfilScreen from '../screens/home/PerfilScreen';
import {colorPallete} from '../data/colorPallete';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Tutoriales') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Foro') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colorPallete.white,
        tabBarInactiveTintColor: colorPallete.darkGreen,
        tabBarActiveBackgroundColor: colorPallete.fullDarkGreen,
        tabBarInactiveBackgroundColor: colorPallete.beigeText,
      })}
      initialRouteName="Tutoriales">
      <Tab.Screen name="Tutoriales" component={TutorialesScreen} />
      <Tab.Screen name="Foro" component={ForoScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
