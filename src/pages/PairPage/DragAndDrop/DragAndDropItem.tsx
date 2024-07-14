import React, {useLayoutEffect, useRef} from 'react';
import {Animated, PanResponder, View, ViewProps} from 'react-native';
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

// Элемент на который можно сделать сброс другого элемента
// area - координаты элемента, data - данные которые передаются сбрасываемому элементу, overHandler - событие когда навели на этот или отвели с этого элемента другой элемент
// dropOverHandler - событие когда на этот элемент бросили другой
// disabled - бросание на элемент отключено
export interface DropType<T> {
  area: DropAreaType;
  data?: T;
  overHandler?: (state: boolean) => void;
  dropOverHandler?: (state?: T) => void;
  disabled?: boolean;
}

// dropHandlers - массив элементов на которые можно сбросить текущий элемент, data - дополнительные данные для обработки сбороса
// setDrop - функция записи в массив элемнетов на которые можно перетащить, dropHandler - обработка сброса, setDragging - установка флага перетаскивания
// disabled - перетаскивание отключено
interface Props<T> extends ViewProps {
  dropHandlers?: DropType<T>[];
  data?: T;
  setDrop?: (dropArea: Partial<DropType<T>>) => void;
  dropHandler?: (data: T) => void;
  setDragging?: (state: boolean) => void;
  disabled?: boolean;
}

export const DragAndDropItem = <T,>(props: Props<T>) => {
  const {children, setDrop, dropHandlers, data, dropHandler, setDragging, style, disabled} = props;
  const position = useRef(new Animated.ValueXY()).current;

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

  // Текущая выделенная зона сброса
  let currDropItem: DropType<T> | null | undefined;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging?.(true);
        console.log('start ');
      },
      onPanResponderMove: (evt, gestureState) => {
        // Выделение зоны сброса
        const zone1 = calcArea(dragZone.current, gestureState);
        let maxSquare = 0;
        let maxIndex = -1;
        dropHandlers?.forEach((item, index) => {
          if (!item.disabled) {
            const matchSquare = matchSquareFn(zone1, item.area);
            if (matchSquare > maxSquare) {
              maxSquare = matchSquare;
              maxIndex = index;
            }
          }
        });
        // Установка зоны сброса с максимальной площадью

        // если покидаем активную зону
        if (maxSquare === 0 && currDropItem) {
          currDropItem?.overHandler?.(false);
          currDropItem = undefined;
        } else if (currDropItem !== dropHandlers?.[maxIndex]) {
          currDropItem?.overHandler?.(false);
          currDropItem = dropHandlers?.[maxIndex];
          currDropItem?.overHandler?.(true);
        }

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
        if (!currDropItem?.disabled) {
          currDropItem?.data && dropHandler?.(currDropItem?.data);
          currDropItem?.dropOverHandler?.(data);
        }

        currDropItem?.overHandler?.(false);
        Animated.spring(position, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
        setDragging?.(false);
      },
    }),
  ).current;

  if (disabled) {
    panResponder.panHandlers.onResponderGrant = () => {};
    panResponder.panHandlers.onResponderMove = () => {};
    panResponder.panHandlers.onResponderRelease = () => {};
  }
  return (
    <Animated.View
      ref={wrapRef}
      style={[
        {
          transform: position.getTranslateTransform(),
        },
        style,
      ]}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};
