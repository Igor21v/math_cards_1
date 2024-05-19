import {Path, Svg, SvgProps} from 'react-native-svg';
import {colors} from '../ui/Colors';

export const Enter = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 490 490" fill={colors.second} {...props}>
    <Path d="M433.5 114.75v102H96.9l91.8-91.8-35.7-35.7-153 153 153 153 35.7-35.7-91.8-91.8h387.6v-153z" />
  </Svg>
);
