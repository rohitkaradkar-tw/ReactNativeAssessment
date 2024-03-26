import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabScreens } from './Screens';
import Cart from '../features/screens/Cart';
import { Home } from '../features/screens/Home';
import WishList from '../features/screens/WishList';
import Settings from '../features/screens/Settings';

const Tab = createBottomTabNavigator();

export const ScreenNavigator = () => (
  <Tab.Navigator initialRouteName={TabScreens.HOME}>
    <Tab.Screen name={TabScreens.HOME} component={Home} />
    <Tab.Screen name={TabScreens.WISHLIST} component={WishList} />
    <Tab.Screen name={TabScreens.CART} component={Cart} />
    <Tab.Screen name={TabScreens.SETTING} component={Settings} />
  </Tab.Navigator>
);
