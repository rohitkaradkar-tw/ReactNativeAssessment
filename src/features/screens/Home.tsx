import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Card } from '../components/Card';
import { useStoreData } from '../../datastore/DataStoreProvider';
import { Screen } from '../components/Screen';

export const Home = () => {
  const { data } = useStoreData();

  if (data.length < 1) {
    return (
      <Screen>
        <ActivityIndicator size={'large'} />
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={responseItem => <Card product={responseItem.item} />}
        keyExtractor={item => item?.id.toString()}
        contentContainerStyle={styles.container}
        style={styles.box}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    padding: 15
  },
  box: {}
});
