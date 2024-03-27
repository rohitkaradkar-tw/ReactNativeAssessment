import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { ProductType } from '../models/Product';
import { WishListIcon } from '../wishlist/WishListIcon';

export const Card = ({ product }: { product: ProductType }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <WishListIcon productID={product.id} />
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
          numberOfLines={2}>
          {product.title}
        </Text>
      </View>
      <View style={styles.metaData}>
        <Text style={{ color: colors.text }}>Price: ₹ {product.price}</Text>
        <Text style={{ color: colors.text }}>
          ratings : {product.rating.rate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 25,
    width: 160,
    borderRadius: 20,
    gap: 10,
    position: 'relative'
  },
  imgBox: {
    alignItems: 'center',
    width: '100%'
  },
  titleBox: {
    height: 40
  },
  image: {
    aspectRatio: 1,
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  metaData: {
    alignItems: 'center'
  }
});
