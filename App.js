import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button } from 'react-native';
import MainPage from './components/MainPage';
// import ProfileRow from './components/ProfileRow';
import HorizontalProfile from './components/HorizontalProfile'
import SettingsPage from './components/SettingsPage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name = "main"
         component = {HomeScreen}
         options={{title: 'Main Page AskAlumni'}}
         independent ={true}
        />
        <Stack.Screen name = "Main Page" component={MainPage} />
        <Stack.Screen name = "Online Alumni" component={HorizontalProfile} />
        <Stack.Screen name = "Settings" component={SettingsPage} />
      </Stack.Navigator>
      {/* <MainPage />
      <ProfileRow />
      <SettingsPage /> */}
      {/* <ProfileRow />
      <ProfileRow /> */}
  </NavigationContainer>

  );
}

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <View style={{ flexDirection: 'row',
                      // flexWrap:'wrap',
                      margin:"25pt",
                      border:"thick solid black",
                      padding:'10pt',
                      justifyContent: 'space-around', }}>
          <Button
            title="Main Page"
            onPress={() =>
              navigation.navigate('Main Page')
                // we're passing a parameter name:'Jane' to the Profile component!
            }
          />
          <Button
            title="Online Alumni"
            onPress={() =>
              navigation.navigate('Online Alumni')
                // we're passing a parameter name:'Jane' to the Profile component!
            }
          />

          <Button
            title="Checkout the Preferences!!"
            onPress={() =>
              navigation.navigate('Settings')
            }
          />
      </View>
      <MainPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
