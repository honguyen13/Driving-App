import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Navigation from './navigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
    'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
  })

  if (!fontsLoaded) { return <AppLoading />; }

  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
