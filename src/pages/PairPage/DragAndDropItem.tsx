import React, {useRef, useState} from 'react';
import {View, StyleSheet, PanResponder, Animated, Image, Dimensions, ViewProps} from 'react-native';

interface Props extends ViewProps {}

export const DragAndDropItem = (props: Props) => {
  const {children} = props;
  const position = useRef(new Animated.ValueXY()).current;
  const [dragging, setDragging] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: position.x,
            dy: position.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        Animated.spring(position, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
        setDragging(false);
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        {
          transform: position.getTranslateTransform(),
          opacity: dragging ? 0.8 : 1,
        },
      ]}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({});
