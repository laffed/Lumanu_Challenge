import React, { VFC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from 'containers';

import { AuthStackNavigatorParamsList } from '../types';
import { AuthStackRoutes } from '../routes';


const { Navigator, Screen } = createNativeStackNavigator<AuthStackNavigatorParamsList>();

export const AuthStackNavigator: VFC = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Screen
        name={ AuthStackRoutes.LOGIN }
        component={ Login }
      />
    </Navigator>
  );
};
