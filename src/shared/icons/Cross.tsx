import {Defs, Path, Svg, SvgProps} from 'react-native-svg';
import {colors} from '../ui/Colors';

export const Cross = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      d="M2 2L20 20"
      stroke={colors.first}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 20L20 2"
      stroke={colors.first}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
