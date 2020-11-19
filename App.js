import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import FacebookScreen from './screen/Facebook'
import InstagramScreen from './screen/Instagram'

export default function App() {
  return (
    <View style={styles.container}>
      
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});

const TabNavigation = createBottomTabNavigator({
  FaceBook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigation)