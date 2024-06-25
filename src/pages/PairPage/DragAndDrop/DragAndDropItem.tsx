import {colors} from '@src/shared/ui/Colors';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {Animated, PanResponder, StyleSheet, View, ViewProps} from 'react-native';
import {calcArea, matchSquareFn} from './calcArea';

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
  setDragOver?: (state: boolean) => void;
  dragOver?: boolean;
  data?: number;
}

interface Props extends ViewProps {
  setDrop?: (dropArea: Partial<DropType>) => void;
  dropHandlers?: DropType[];
  dragOverState?: boolean;
  data?: number;
}

export const DragAndDropItem = (props: Props) => {
  const {children, setDrop, dropHandlers, dragOverState, data} = props;
  const position = useRef(new Animated.ValueXY()).current;
  const [dragging, setDragging] = useState(false);
  const [hide, setHide] = useState(false);
  let wrapRef = useRef<View>(null);
  let dragZone = useRef<DropAreaType>({x1: 0, y1: 0, x2: 0, y2: 0});
  useLayoutEffect(() => {
    setTimeout(() => {
      wrapRef.current?.measure((fx, fy, width, height, px, py) => {
        dragZone.current = {x1: px, y1: py, x2: px + width, y2: py + height};
        setDrop?.({area: {x1: px, x2: px + width, y1: py, y2: py + height}});
      });
    });
  }, []);

  const mods = [];
  (dragging || dragOverState) && mods.push(styles.dragging);
  hide && mods.push(styles.hide);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);
        console.log('start');
      },
      onPanResponderMove: (evt, gestureState) => {
        // Выделение зоны сброса
        const zone1 = calcArea(dragZone.current, gestureState);
        let maxSquare = 0;
        let maxIndex = -1;
        dropHandlers?.forEach((item, index) => {
          const matchSquare = matchSquareFn(zone1, item.area);
          if (matchSquare > maxSquare) {
            maxSquare = matchSquare;
            maxIndex = index;
          }
        });
        // Установка для максимальной площади
        if (maxSquare > 0 && !dropHandlers?.[maxIndex]?.dragOver) {
          dropHandlers?.[maxIndex].setDragOver?.(true);
        }
        // Сброс остальных
        dropHandlers?.forEach((item, index) => {
          if (index !== maxIndex && item.dragOver) {
            item.setDragOver?.(false);
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
        // Проверка совпадения ответа
        dropHandlers?.forEach(item => {
          if (item.dragOver) {
            if (item.data === data) {
              setHide(true);
            }
            item.setDragOver?.(false);
          }
        });
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
  hide: {
    opacity: 0,
  },
});
