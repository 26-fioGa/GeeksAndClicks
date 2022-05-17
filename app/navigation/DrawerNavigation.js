import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactoScreen from '../screens/home/ContactoScreen';
import AcercaDeScreen from '../screens/home/AcercaDeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/home/CustomDrawer';
import { colorPallete } from '../data/colorPallete';


import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} /> } screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: colorPallete.darkGreen,
            drawerActiveTintColor: colorPallete.white,
            drawerInactiveTintColor: colorPallete.fullDarkGreen,
            drawerLabelStyle: {marginLeft: -25, fontSize: 15}
        }}>
            <Drawer.Screen name="Inicio" component={BottomTabNavigator} options={{
                drawerIcon: ( {color} ) => (
                    <Ionicons name='home-outline' size={22} color={color}></Ionicons>
                )
            }} />
            <Drawer.Screen name="Contáctanos" component={ContactoScreen}  options={{
                drawerIcon: ( {color} ) => (
                    <Ionicons name='call-outline' size={22} color={color}></Ionicons>
                )
            }} />
            <Drawer.Screen name="Acerca De" component={AcercaDeScreen}  options={{
                drawerIcon: ( {color} ) => (
                    <Ionicons name='rocket-outline' size={22} color={color}></Ionicons>
                )
            }} />
        </Drawer.Navigator>
    );
}