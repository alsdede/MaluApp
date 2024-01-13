import {RefObject} from 'react';
import {Text, StyleSheet, Pressable, StyleProp, ViewStyle} from 'react-native';

type ButtonProps = {
  styles?: StyleProp<ViewStyle>;
  ref?: RefObject<typeof Pressable>;
  title: string;
};
export function Button({styles, ref, title, ...rest}: ButtonProps) {
  return (
    <Pressable style={[buttonStyles.container, styles]} {...rest}>
      <Text style={buttonStyles.title}>{title}</Text>
    </Pressable>
  );
}

const buttonStyles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
  },
});
