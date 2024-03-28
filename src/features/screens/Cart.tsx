import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
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
      <View style={styles.billContainer}>
        <Text style={styles.bill}> ₹ {totalBill.toFixed(2)} </Text>
        <View style={styles.checkOutContainer}>
          <Pressable>
            <Text style={styles.checkout}> --{'>'} Check Out</Text>
          </Pressable>
        </View>
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
  },
  billContainer: {
    flexDirection: 'row',
    width: '97%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  bill: {
    color: 'black',
    fontSize: 30
  },
  checkOutContainer: {
    backgroundColor: '#033e9c',
    width: '35%',
    borderRadius: 25,
    alignItems: 'center',
    padding: 10
  },
  checkout: {
    color: '#5fb4e8'
  }
});
