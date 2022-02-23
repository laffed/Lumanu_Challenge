import React, { VFC } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useNavigationDevTools } from 'hooks';

import { MainBottomTabNavigator } from './MainBottomTab';


export const RootNavigator: VFC = () => {

  const navigationRef = useNavigationContainerRef();
  useNavigationDevTools()(navigationRef);

  return (
    <NavigationContainer
      ref={ navigationRef }
    >
      <MainBottomTabNavigator />
    </NavigationContainer>
  );
};
