import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/Register';
import { createStackNavigator  } from "@react-navigation/stack";
import firebase from 'firebase';
import { firebaseConfig  } from "./Config";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
 const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Dashboard' component={DrawerNavigator} />
    </Stack.Navigator>
  )
 }