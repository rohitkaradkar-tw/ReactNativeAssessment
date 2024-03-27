import React from 'react';
import { useStoreData } from '../../datastore/DataStoreProvider';
import { Text, Pressable, View, StyleSheet } from 'react-native';

const CartButton = ({ productID }: { productID: number }) => {
  const { isInCart, toggleCartItems } = useStoreData();

  return (
    <Pressable
      onPress={() => {
        toggleCartItems(productID);
      }}>
      {isInCart(productID) ? (
        <View style={[styles.cartButton, styles.removeButtonColor]}>
          <Text style={styles.cartText} numberOfLines={2}>
            Remove from Cart
          </Text>
        </View>
      ) : (
        <View style={[styles.cartButton, styles.addButtonColor]}>
          <Text style={styles.cartText}> Add to Cart</Text>
        </View>
      )}
    </Pressable>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 35
  },
  removeButtonColor: {
    backgroundColor: '#b4c6db'
  },
  addButtonColor: {
    backgroundColor: '#5297eb'
  },
  cartText: {
    color: 'white',
    textAlign: 'center'
  }
});
