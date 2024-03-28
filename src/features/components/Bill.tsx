import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Bill = ({ totalBill }: { totalBill: Number }) => {
  return (
    <View style={styles.billContainer}>
      <Text style={styles.bill}> ₹ {totalBill.toFixed(2)} </Text>
      <View style={styles.checkOutContainer}>
        <Pressable>
          <Text style={styles.checkout}> --{'>'} Check Out</Text>
        </Pressable>
      </View>
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
