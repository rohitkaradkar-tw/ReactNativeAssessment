import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserName = async (name: string) => {
  const response = await AsyncStorage.getItem(name);
  return response;
};

const setUserName = async (name: string) => {
  try {
    await AsyncStorage.setItem('username', name);
  } catch (e) {
    console.error('Error storing username: ' + e);
  }
};

export { setUserName, getUserName };
