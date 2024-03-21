// This app will have 4 bottom tabs (Home, Wishlist, Cart, Settings). And will show me the title of the page whenever I navigate to it. 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import WishList from './WishList';
import Cart from './Cart';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{title:'Home'}} />
                <Tab.Screen name="Wishlist" component={WishList} options={{title:'Wishlist'}}/>
                <Tab.Screen name='Cart' component={Cart} options={{title:'Cart'}}/>
                <Tab.Screen name="Settings" component={Settings} options={{title:'Settings'}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;