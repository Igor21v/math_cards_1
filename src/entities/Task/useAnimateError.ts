import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimateError = () => {
  const animValue = useRef(new Animated.Value(0)).current;
  const startAnimate = () => {
    Animated.timing(animValue, {
      toValue: 3,
      useNativeDriver: true,
      easing: Easing.elastic(10),
    }).start();
  };
  return {animValue, startAnimate};
};
