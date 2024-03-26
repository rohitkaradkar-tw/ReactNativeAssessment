import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Card } from '../components/Card';
import { useStoreData } from '../../datastore/DataStoreProvider';

export const Home = () => {
  const { data } = useStoreData();

  if (data.length < 1) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={responseItem => <Card product={responseItem.item} />}
      keyExtractor={item => item?.id.toString()}
      contentContainerStyle={styles.container}
      style={styles.box}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 20,
    alignContent: 'flex-start'
  },
  box: {
    padding: 15
  }
});
