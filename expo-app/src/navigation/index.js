import * as Linking from 'expo-linking';

import React, {useEffect, useState} from 'react';

import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';

const prefix = Linking.createURL('/');

export default function Navigation() {
    const [data, setData] = useState(null);
    const linking = {
        prefixes: [prefix],
    };
    useEffect(() =>{
        const getInitialUrl = async () => {
            const initialUrl = await Linking.getInitialURL();
            console.log(initialUrl);
            if(initialUrl) {
                setData(Linking.parse(initialUrl));
            }
        };
        // open the app when in the background
        Linking.addEventListener('url', handleDeepLink);

        if(!data) {
            getInitialUrl();
        }

        return Linking.removeEventListener('url');
    },[]);
    const handleDeepLink = event => {
        let data = Linking.parse(event.url);
        setData(data);
    };
    return (
        <NavigationContainer linking={linking}>
            <DrawerNavigation />
        </NavigationContainer>
    );
}
