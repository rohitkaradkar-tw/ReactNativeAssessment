import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ProductType } from '../models/Product';

export const Card = ({ product }: { product: ProductType }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={[styles.title, { color: colors.text }]}>
        {product.title}
      </Text>
      <Text style={{ color: colors.text }}>Price: ₹{product.price}</Text>
      <Text style={{ color: colors.text }}>
        ratings : {product.rating.rate}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { margin: 20, width: 200, height: 250 },
  image: { width: 200, height: 200 },
  title: { fontSize: 18, fontWeight: 'bold' }
});
