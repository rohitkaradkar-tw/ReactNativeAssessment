import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Card } from '../components/Card';
import { useStoreData } from '../../datastore/DataStoreProvider';

export const Home = () => {
  const { data } = useStoreData();

  if (!data) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={responseItem => <Card product={responseItem.item} />}
      keyExtractor={item => item?.id.toString()}
    />
  );
};
