import React from 'react';
import {SettingsStackNavigation} from '../StackNavigation';
import TabNavigation from '../TabNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name='Home' component={TabNavigation} />
            <Drawer.Screen name='Settings' component={SettingsStackNavigation} />
        </Drawer.Navigator>
    );
}
