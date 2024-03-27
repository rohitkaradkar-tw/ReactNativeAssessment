import React from 'react';
import { Image, StyleSheet } from 'react-native';

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

// As we are using Images from local path. Runtime path generation is failing. and causing the Icon component to fail

const imagesFolder = '../../../assets/images';

export const HomeTabIcon = (props: IconProps) => {
  return (
    <Image
      source={require(`${imagesFolder}/home.png`)}
      style={[
        styles.icon,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          opacity: props.focused ? 1 : 0.7,
          height: props.size
        }
      ]}
      resizeMode="contain"
    />
  );
};

export const SettingsTabIcon = (props: IconProps) => {
  return (
    <Image
      source={require(`${imagesFolder}/settings.png`)}
      style={[
        styles.icon,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          opacity: props.focused ? 1 : 0.7,
          height: props.size
        }
      ]}
      resizeMode="contain"
    />
  );
};

export const WishlistTabIcon = (props: IconProps) => {
  return (
    <Image
      source={require(`${imagesFolder}/wishlist.png`)}
      style={[
        styles.icon,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          opacity: props.focused ? 1 : 0.7,
          height: props.size
        }
      ]}
      resizeMode="contain"
    />
  );
};

export const CartTabIcon = (props: IconProps) => {
  return (
    <Image
      source={require(`${imagesFolder}/cart.png`)}
      style={[
        styles.icon,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          opacity: props.focused ? 1 : 0.7,
          height: props.size
        }
      ]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    aspectRatio: 1,
    padding: 5
  }
});
