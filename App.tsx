import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {HomeScreen} from '@screens';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar />
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
