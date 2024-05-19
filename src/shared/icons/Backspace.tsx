import {Path, Svg, SvgProps} from 'react-native-svg';
import {colors} from '../ui/Colors';

export const Backspace = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    color={colors.second}
    {...props}>
    <Path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6" />
  </Svg>
);
