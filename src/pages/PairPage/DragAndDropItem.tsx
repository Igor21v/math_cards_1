import {colors} from '@src/shared/ui/Colors';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Animated, PanResponder, StyleSheet, View, ViewProps} from 'react-native';

export interface DropAreaType {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
export interface DropHadlerType {
  dragEnter?: () => void;
  dragLeave?: () => void;
  drop?: () => void;
}
export interface DropType {
  area: DropAreaType;
  handler?: DropHadlerType;
  dragOver?: boolean;
}

interface Props extends ViewProps {
  setDrogArea?: (dropArea: DropAreaType) => void;
  dropHendlers?: DropType[];
}

export const DragAndDropItem = (props: Props) => {
  const {children, setDrogArea, dropHendlers} = props;
  const position = useRef(new Animated.ValueXY()).current;
  const [dragging, setDragging] = useState(false);
  const [dropzone, setDropZone] = useState(false);
  let wrapRef = useRef<View>(null);
  let dropZone = useRef<DropAreaType>({x1: 0, y1: 0, x2: 0, y2: 0});
  useLayoutEffect(() => {
    wrapRef.current?.measure((fx, fy, width, height, px, py) => {
      dropZone.current = {x1: px, y1: py, x2: px + width, y2: py + height};
    });
    setDrogArea?.({x1: 200, x2: 22, y1: 2, y2: 2});
  });

  const mods = [];
  dragging && mods.push(styles.dragging);
  dropzone && mods.push(styles.dropzone);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);
        console.log('start');
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.moveX > 200) {
          mods.push(styles.dropzone);
        }
        /*   console.log('x ' + gestureState.dx + '  y ' + gestureState.dy);
        console.log(dropZone.current); */
        const x1 = dropZone.current.x1 + gestureState.dx;
        const x2 = dropZone.current.x2 + gestureState.dx;
        const y1 = dropZone.current.y1 + gestureState.dy;
        const y2 = dropZone.current.y2 + gestureState.dy;
        dropHendlers?.forEach(item => {
          if (x1 > item.area.x1) {
            item.handler?.dragEnter?.();
            /* console.log('ddd'); */
          }
        });
        Animated.event(
          [
            null,
            {
              dx: position.x,
              dy: position.y,
            },
          ],
          {useNativeDriver: false},
        )(evt, gestureState);
      },
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
      ref={wrapRef}
      style={[
        styles.wrap,
        ...mods,
        {
          transform: position.getTranslateTransform(),
        },
      ]}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dragging: {
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: colors.first,
  },
  dropzone: {
    borderColor: 'green',
  },
});
