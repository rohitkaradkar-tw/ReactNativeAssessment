// This app will have 4 bottom tabs (Home, Wishlist, Cart, Settings). And will show me the title of the page whenever I navigate to it. 
import * as React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import WishList from './WishList';
import Cart from './Cart';
import { ThemeModeContext } from '../../../App';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const themeModeContext = React.useContext(ThemeModeContext);
    const themeData = themeModeContext.themeMode === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer independent={true} theme={themeData}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: 'purple',
                    tabBarShowLabel: true,
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                <Tab.Screen name="Wishlist" component={WishList} options={{ title: 'Wishlist' }} />
                <Tab.Screen name='Cart' component={Cart} options={{ title: 'Cart' }} />
                <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;