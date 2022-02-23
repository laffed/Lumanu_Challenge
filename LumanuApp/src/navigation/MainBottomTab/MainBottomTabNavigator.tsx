import React, { VFC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SearchStackNavigator } from 'navigation/SearchStackNavigator';
import { Home, Explore } from 'containers';

import { MainBottomTabNavigatorParamsList } from '../types';
import { MainBottomTabRoutes } from '../routes';


const { Navigator, Screen } = createBottomTabNavigator<MainBottomTabNavigatorParamsList>();

export const MainBottomTabNavigator: VFC = () => {

  return (
    <Navigator>
      <Screen
        name={ MainBottomTabRoutes.HOME }
        component={ Home }
      />
      <Screen
        name={ MainBottomTabRoutes.EXPLORE }
        component={ Explore }
      />
      <Screen
        name={ MainBottomTabRoutes.SEARCH }
        component={ SearchStackNavigator }
      />
    </Navigator>
  );
};
