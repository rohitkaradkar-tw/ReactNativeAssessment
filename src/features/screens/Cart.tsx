import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useStoreData } from '../../datastore/DataStoreProvider';
import CartCard from '../components/CartCard';
import { Screen } from '../components/Screen';

const Cart = () => {
  const { getCartList, getBill } = useStoreData();
  const [totalBill, getTotalBill] = useState(getBill());

  const handleBill = (price: number) => {
    getTotalBill(totalBill + price);
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
      <View>
        <Text> ₹ {totalBill} </Text>
      </View>
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
