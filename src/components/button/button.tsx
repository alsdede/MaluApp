import {RefObject} from 'react';
import {Text, Pressable, StyleProp, ViewStyle} from 'react-native';
import {PressableBox} from '../box/box';
import {buttonPresets} from './presets';

export type ButtonPreset = 'primary' | 'outline';

type ButtonProps = {
  styles?: StyleProp<ViewStyle>;
  ref?: RefObject<typeof Pressable>;
  title: string;
  disabled?: boolean;
  preset?: ButtonPreset;
};

export function Button({
  styles,
  ref,
  title,
  disabled,
  preset = 'primary',
  ...rest
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <PressableBox
      testID="button"
      ref={ref}
      disabled={disabled}
      alignItems="center"
      justifyContent="center"
      borderRadius="s8"
      height={40}
      {...buttonPreset.container}
      {...rest}>
      <Text>{title}</Text>
    </PressableBox>
  );
}
