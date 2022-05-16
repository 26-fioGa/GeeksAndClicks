import * as React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colorPallete } from '../../data/colorPallete';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colorPallete.darkGreen }} >
                <ImageBackground source={require('../../assets/drawerBackground.png')} style={{ padding: 20, alignItems: 'center' }}>
                    <Image source={require('../../assets/logoDrawer.png')} style={{ width: 180, height: 40, alignSelf: 'center', marginVertical: 20 }}></Image>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: colorPallete.white, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='log-out-outline' size={22} color={colorPallete.fullDarkGreen}></Ionicons>
                        <Text style={{ fontSize: 15, marginLeft: 5, color: colorPallete.fullDarkGreen }}>Cerrar Sesión</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CustomDrawer