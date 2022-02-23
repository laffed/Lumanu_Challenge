import React, { VFC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchBy } from 'containers';

import { MainBottomTabScreenProp, SearchStackNavigatorParamsList } from '../types';
import { MainBottomTabRoutes, SearchStackRoutes } from '../routes';


const { Navigator, Screen } = createNativeStackNavigator<SearchStackNavigatorParamsList>();

export const SearchStackNavigator: VFC<MainBottomTabScreenProp<MainBottomTabRoutes.SEARCH>> = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Screen
        name={ SearchStackRoutes.SEARCH_BY }
        component={ SearchBy }
      />
      {/* <Screen name={ SearchStackRoutes.OWNER_AND_REPO_SEARCH } /> */}
      {/* <Screen name={ SearchStackRoutes.OWNER_REPOS_SEARCH } /> */}
    </Navigator>
  );
};
