import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
*/
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const MainNavigator = createNativeStackNavigator();


export default function AppNavigator() {
    const user = true;

    return (
        <NavigationContainer>
            <MainNavigator.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
            >
                <MainNavigator.Screen name="Login" component={LoginScreen} />
                <MainNavigator.Screen name="Register" component={RegisterScreen} />
                <MainNavigator.Screen name="Home" component={BottomTabNavigator} />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}