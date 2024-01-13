import {View, Text, StyleSheet} from 'react-native';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>PROFILE SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
});
