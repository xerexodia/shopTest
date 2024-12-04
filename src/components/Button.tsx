import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../constants/colors';

interface IButtonProps extends TouchableOpacityProps {
  text: string;
}
const Button: React.FC<IButtonProps> = ({text, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.btn]} {...rest} testID="button">
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.PRIMARY,
  },
  text: {
    color: colors.WHITE,
  },
});
