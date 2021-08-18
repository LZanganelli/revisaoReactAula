import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import Menu from './components/Menu';
import { colors } from './utils/colors';


export default function App() {
  return (
    <View style={styles.container}>
      <Menu/>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex:1,
  }
});
