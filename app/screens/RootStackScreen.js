import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './auth/LoginScreen';
import RegisterScreen from './auth/RegisterScreen';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{
        headerShown: false
    }} initialRouteName="Login">
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Register" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;