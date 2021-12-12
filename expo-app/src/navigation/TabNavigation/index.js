import {AlbumStackNavigation, ArticleStackNavigation, ChatStackNavigation, ContactStackNavigation} from '../StackNavigation';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name='Article' component={ArticleStackNavigation} />
            <Tab.Screen name='Chat' component={ChatStackNavigation} />
            <Tab.Screen name='Contacts' component={ContactStackNavigation} />
            <Tab.Screen name='Albums' component={AlbumStackNavigation} />

        </Tab.Navigator>        
    );
}
