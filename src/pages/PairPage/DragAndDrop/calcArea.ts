import {PanResponderGestureState} from 'react-native';
import {DropAreaType} from './DragAndDropItem';

export function calcArea(dropZone: DropAreaType, gestureState: PanResponderGestureState) {
  const x1 = dropZone.x1 + gestureState.dx;
  const x2 = dropZone.x2 + gestureState.dx;
  const y1 = dropZone.y1 + gestureState.dy;
  const y2 = dropZone.y2 + gestureState.dy;
  return {x1, x2, y1, y2};
}

export function inArea(zone1: DropAreaType, zone2: DropAreaType) {
  return zone1.x2 > zone2.x1 && zone1.x1 < zone2.x2 && zone1.y2 > zone2.y1 && zone1.y1 < zone2.y2;
}
