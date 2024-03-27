import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

import { ProductType } from '../models/Product';
import { WishListIcon } from '../wishlist/WishListIcon';

export const CompactCard = ({ product }: { product: ProductType }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.imgBox}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleBox}>
        <Text
          style={[styles.title, { color: colors.text }]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={{ color: colors.text }}>₹ {product.price}</Text>
      </View>
      <WishListIcon productID={product.id} containerStyle={styles.wishList} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    height: 120,
    width: '100%',
    borderRadius: 20,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imgBox: {
    alignItems: 'center',
    height: '100%'
  },
  image: {
    aspectRatio: 1,
    height: '100%'
  },
  titleBox: {
    width: '55%',
    paddingVertical: 10,
    gap: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  wishList: {
    position: 'relative',
    top: 0,
    right: 0
  }
});
