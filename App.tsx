import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import FirstComponents from './components/FirstComponents';
import ImageComponents from './components/ImageComponents';
export default function App() {
  return (
    <View style={styles.container}>
      <FirstComponents></FirstComponents>
 <ImageComponents></ImageComponents>
      <Text>Hello Word!</Text>
      <StatusBar style="auto" />
    </View>
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
