import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Card } from '../components/Card';
import { useStoreData } from '../../datastore/DataStoreProvider';
import { Screen } from '../components/Screen';

export const Home = () => {
  const { data, userName } = useStoreData();

  if (data.length < 1) {
    return (
      <Screen>
        <ActivityIndicator size={'large'} />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Welcome {userName}</Text>
      </View>
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
  titleBox: {
    height: 30,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  box: {}
});
