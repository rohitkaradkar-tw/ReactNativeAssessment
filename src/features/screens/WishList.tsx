import React from 'react';

import { useStoreData } from '../../datastore/DataStoreProvider';
import { Screen } from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import { CompactCard } from '../components/CompactCard';

export const WishList = () => {
  const { getWishList } = useStoreData();

  return (
    <Screen>
      <FlatList
        data={getWishList()}
        renderItem={wishlistEntry => (
          <CompactCard product={wishlistEntry.item} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        style={styles.list}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    margin: 20
  },
  list: {
    width: '100%'
  }
});
