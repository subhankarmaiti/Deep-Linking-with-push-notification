import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';
import React from 'react';

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
}

