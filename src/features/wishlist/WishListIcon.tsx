import React from 'react';
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { useStoreData } from '../../datastore/DataStoreProvider';

const selectedHeartIcon = '../../../assets/images/heartSelected.png';
const unSelectedHeartIcon = '../../../assets/images/wishlist.png';

export const WishListIcon = ({
  productID,
  containerStyle
}: {
  productID: number;
  containerStyle?: ViewStyle;
}) => {
  const { isWishlisted, toggleWishStatus } = useStoreData();

  return (
    <Pressable
      onPress={() => {
        toggleWishStatus(productID);
      }}
      style={[styles.iconButton, containerStyle]}>
      {isWishlisted(productID) ? (
        <Image
          source={require(selectedHeartIcon)}
          style={styles.icon}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.iconBox}>
          <Image
            source={require(unSelectedHeartIcon)}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    aspectRatio: 1,
    height: '100%'
  },
  iconButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
    aspectRatio: 1,
    width: 30
  },
  iconBox: {
    padding: 4,
    borderRadius: 100,
    opacity: 0.5
  }
});
