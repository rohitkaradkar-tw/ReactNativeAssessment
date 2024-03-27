import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = (key: string) => AsyncStorage.getItem(key);
const setItem = (key: string, value: string) =>
  AsyncStorage.setItem(key, value);

const USERNAME_KEY = 'USERNAME';

export const getUserName = () => getItem(USERNAME_KEY);
export const setUserName = (name: string) => setItem(USERNAME_KEY, name);
