import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@components';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
});
