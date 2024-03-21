import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Screen } from '../components/Screen';
import { useStoreData } from '../../datastore/DataStoreProvider';
import { CompactCard } from '../components/CompactCard';

const Cart = () => {
  const { getCartList } = useStoreData();

  return (
    <Screen>
      <FlatList
        data={getCartList()}
        renderItem={cartListEntry => (
          <CompactCard product={cartListEntry.item} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        style={styles.list}
      />
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
