import React from 'react';
import Settings from '../../../screens/Settings';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function SettingsStackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Settings} />
        </Stack.Navigator>
    );
}
