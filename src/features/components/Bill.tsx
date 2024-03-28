import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Bill = ({
  totalBill,
  placingOrder
}: {
  totalBill: Number;
  placingOrder: () => void;
}) => {
  return (
    <View style={styles.billContainer}>
      <Text style={styles.bill}> ₹ {totalBill.toFixed(2)} </Text>
      <Pressable
        onPress={() => placingOrder()}
        style={styles.checkOutContainer}>
        <Text style={styles.checkout}> --{'>'} Check Out</Text>
      </Pressable>
    </View>
  );
};
export default Bill;

const styles = StyleSheet.create({
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
