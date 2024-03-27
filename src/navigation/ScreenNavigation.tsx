import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabScreens } from './Screens';
import Cart from '../features/screens/Cart';
import { Home } from '../features/screens/Home';
import { WishList } from '../features/screens/WishList';
import Settings from '../features/screens/Settings';
import {
  CartTabIcon,
  HomeTabIcon,
  SettingsTabIcon,
  WishlistTabIcon
} from '../features/components/TabBarIcon';

const Tab = createBottomTabNavigator();

export const ScreenNavigator = () => (
  <Tab.Navigator initialRouteName={TabScreens.HOME}>
    <Tab.Screen
      name={TabScreens.HOME}
      component={Home}
      options={{ tabBarIcon: HomeTabIcon }}
    />
    <Tab.Screen
      name={TabScreens.WISHLIST}
      component={WishList}
      options={{ tabBarIcon: WishlistTabIcon }}
    />
    <Tab.Screen
      name={TabScreens.CART}
      component={Cart}
      options={{ tabBarIcon: CartTabIcon }}
    />
    <Tab.Screen
      name={TabScreens.SETTING}
      component={Settings}
      options={{ tabBarIcon: SettingsTabIcon }}
    />
  </Tab.Navigator>
);
