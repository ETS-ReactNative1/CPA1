import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import {StyleSheet, Text, View, Button } from 'react-native';
import MainPage from './components/MainPage';
import VideoCall from './components/VideoCall'
import HorizontalProfile from './components/HorizontalProfile'
import SettingsPage from './components/SettingsPage';
import ProfilePage from './components/ProfilePage';
import ValueProvider from './ValueContext';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = "Main Page" component={MainPage} />
      <Drawer.Screen name = "Online Alumni" component={HorizontalProfile} />
      <Drawer.Screen name = "Settings" component={SettingsPage} />
      <Drawer.Screen name = "Video Call" component={VideoCall} />
      <Drawer.Screen name = "Profile Page" component={ProfilePage} />

    </Drawer.Navigator>
  );
}

export default function App() {
  const data = {name:"",showOnline:"" }
  return (
    <ValueProvider value = {data}>
    <NavigationContainer>
      <MyDrawer />  
    </NavigationContainer>

  </ValueProvider>

  );
}

const HomeScreen = () => {
  return (   
    <View style={styles.container}>
      <MainPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'stretch',
    // justifyContent: 'center',
  },
});
