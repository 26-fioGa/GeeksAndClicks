import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialesScreen from '../../screens/home/TutorialesScreen';
import TutorialesListScreen from '../../screens/home/TutorialesListScreen';
import TutorialDetalleScreen from '../../screens/home/TutorialDetalleScreen';
import { colorPallete } from '../../data/colorPallete';

const Stack = createNativeStackNavigator();

export default function TutorialesStack() {
    return (
        <Stack.Navigator
            initialRouteName="TutorialesCategorias"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="TutorialesCategorias"
                component={TutorialesScreen} screenOptions={{backgroundColor: colorPallete.white}}/>
            <Stack.Screen
                name="TutorialesList"
                component={TutorialesListScreen} screenOptions={{backgroundColor: colorPallete.white}} />
            <Stack.Screen
                name="TutorialDetalle"
                component={TutorialDetalleScreen} screenOptions={{backgroundColor: colorPallete.white}} />
        </Stack.Navigator>
    );
}