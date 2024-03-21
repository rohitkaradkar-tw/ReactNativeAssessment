// This app will have 4 bottom tabs (Home, Wishlist, Cart, Settings). And will show me the title of the page whenever I navigate to it. 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home/home';
import Settings from '../settings/settingsScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;