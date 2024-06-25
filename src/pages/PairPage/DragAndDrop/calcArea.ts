import {PanResponderGestureState} from 'react-native';
import {DropAreaType} from './DragAndDropItem';

export function calcArea(dropZone: DropAreaType, gestureState: PanResponderGestureState) {
  const x1 = dropZone.x1 + gestureState.dx;
  const x2 = dropZone.x2 + gestureState.dx;
  const y1 = dropZone.y1 + gestureState.dy;
  const y2 = dropZone.y2 + gestureState.dy;
  return {x1, x2, y1, y2};
}

export function matchSquareFn(z1: DropAreaType, z2: DropAreaType) {
  if (z1.x2 > z2.x1 && z1.x1 < z2.x2 && z1.y2 > z2.y1 && z1.y1 < z2.y2) {
    let sx = 0;
    let sy = 0;

    // Считаем пересечение по x
    // Зона 1 находится левее и частично перекрывает зону 2, либо зоны совпадают
    if (z1.x2 > z2.x1 && z1.x2 <= z2.x2 && z1.x1 <= z2.x1) {
      sx = z1.x2 - z2.x1;
      // Зона 1 находится правее и частично перекрывает зону 2
    } else if (z1.x2 >= z2.x2 && z1.x1 < z2.x2 && z1.x1 >= z2.x1) {
      sx = z1.x2 - z2.x1;
      // Зона 1 шире зоны 2
    } else if (z1.x1 <= z2.x1 && z1.x2 >= z2.x2) {
      sx = z2.x2 - z2.x1;
      // зона 1 вписана в зону 2
    } else if (z1.x1 >= z2.x1 && z1.x2 <= z2.x2) {
      sx = z1.x2 - z1.x1;
    }

    // Считаем пересечение по y
    // Зона 1 находится левее и частично перекрывает зону 2, либо зоны совпадают
    if (z1.y2 > z2.y1 && z1.y2 <= z2.y2 && z1.y1 <= z2.y1) {
      sy = z1.y2 - z2.y1;
      // Зона 1 находится правее и частично перекрывает зону 2
    } else if (z1.y2 >= z2.y2 && z1.y1 < z2.y2 && z1.y1 >= z2.y1) {
      sy = z1.y2 - z2.y1;
      // Зона 1 шире зоны 2
    } else if (z1.y1 <= z2.y1 && z1.y2 >= z2.y2) {
      sy = z2.y2 - z2.y1;
      // зона 1 вписана в зону 2
    } else if (z1.y1 >= z2.y1 && z1.y2 <= z2.y2) {
      sy = z1.y2 - z1.y1;
    }

    const s = sx * sy;
    return s;
  }

  return 0;
}
