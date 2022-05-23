import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForoScreen from '../../screens/home/ForoScreen';
import DetallePostScreen from '../../screens/home/DetallePostScreen';
import { colorPallete } from '../../data/colorPallete';

const Stack = createNativeStackNavigator();

export default function ForoStack() {
    
    return (
        <Stack.Navigator
            initialRouteName="ForoListadoPost"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="ForoListadoPost"
                component={ForoScreen} screenOptions={{backgroundColor: colorPallete.white}}/>
            <Stack.Screen
                name="DetallePost"
                component={DetallePostScreen} screenOptions={{backgroundColor: colorPallete.white}} />
        </Stack.Navigator>
    );
}