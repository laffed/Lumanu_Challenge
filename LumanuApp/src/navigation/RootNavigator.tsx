import React, { VFC } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useNavigationDevTools } from 'hooks';

import { MainBottomTabNavigator } from './MainBottomTab';
import { AuthStackNavigator } from './AuthStackNavigator';


const isLoggedIn = false;

export const RootNavigator: VFC = () => {

  const navigationRef = useNavigationContainerRef();
  useNavigationDevTools()(navigationRef);

  return (
    <NavigationContainer
      ref={ navigationRef }
    >
      {isLoggedIn && <MainBottomTabNavigator /> }
      {!isLoggedIn && <AuthStackNavigator /> }
    </NavigationContainer>
  );
};
