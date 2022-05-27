import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PerfilScreen from '../../screens/home/PerfilScreen';
import EditPostScreen from '../../screens/home/EditPostScreen';
import {colorPallete} from '../../data/colorPallete';

const Stack = createNativeStackNavigator();

export default function PostStack() {
  return (
    <Stack.Navigator
      initialRouteName="PerfilListadoPost"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="PerfilListadoPost"
        component={PerfilScreen}
        screenOptions={{backgroundColor: colorPallete.white}}
      />
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        screenOptions={{backgroundColor: colorPallete.white}}
        options={{unmountOnBlur: true}}
      />
    </Stack.Navigator>
  );
}
