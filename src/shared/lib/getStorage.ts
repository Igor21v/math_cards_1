import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async (key: string, fn: (value: any) => void) => {
  try {
    const value = await AsyncStorage.getItem(key);
    fn(value);
  } catch (e) {
    console.log(e);
  }
};
