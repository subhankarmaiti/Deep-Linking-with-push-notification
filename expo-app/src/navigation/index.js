import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
}
