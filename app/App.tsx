import React from 'react';
import {
  useFonts,

  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/home';
import { StatusBar } from 'expo-status-bar';
import  SignInBox from './src/components/SignInBox'
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  if (!fontsLoaded) {
    return (<AppLoading />)
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Home />
      </>
    )
  }
}