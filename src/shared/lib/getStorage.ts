import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async <T>(key: string, fn: (value: T) => void) => {
  try {
    const value = (await AsyncStorage.getItem(key)) as T;
    fn(value);
  } catch (e) {
    console.log(e);
  }
};
