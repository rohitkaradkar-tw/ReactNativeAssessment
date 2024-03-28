import React, { useState } from 'react';
import { FlatList, StyleSheet, Alert } from 'react-native';
import { useStoreData } from '../../datastore/DataStoreProvider';
import CartCard from '../components/CartCard';
import { Screen } from '../components/Screen';
import Bill from '../components/Bill';

const Cart = () => {
  const { getCartList, getBill, clearCart } = useStoreData();
  const [totalBill, setTotalBill] = useState(getBill());

  const handleBill = (price: number) => {
    setTotalBill(totalBill + price);
  };

  const placingOrder = () => {
    if (totalBill) {
      Alert.alert('Order', 'Order Placed', [
        {
          text: 'Ok',
          onPress: () => {
            clearCart();
            setTotalBill(0);
          }
        }
      ]);
    }
  };

  return (
    <Screen>
      <FlatList
        data={getCartList()}
        renderItem={cartListEntry => (
          <CartCard product={cartListEntry.item} handleBill={handleBill} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        style={styles.list}
      />
      <Bill totalBill={totalBill} placingOrder={placingOrder} />
    </Screen>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    margin: 20
  },
  list: {
    width: '100%'
  }
});
