import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainBottomTabRoutes, SearchStackRoutes, AuthStackRoutes } from '.';


export type MainBottomTabNavigatorParamsList = {
  [MainBottomTabRoutes.HOME]: undefined;
  [MainBottomTabRoutes.SEARCH]: NavigatorScreenParams<SearchStackNavigatorParamsList>;
  [MainBottomTabRoutes.EXPLORE]: undefined;
}
export type MainBottomTabScreenProp<T extends keyof MainBottomTabNavigatorParamsList> =
  BottomTabScreenProps<MainBottomTabNavigatorParamsList, T>;

export type SearchStackNavigatorParamsList = {
  [SearchStackRoutes.SEARCH_BY]: undefined;
  [SearchStackRoutes.OWNER_AND_REPO_SEARCH]: undefined;
  [SearchStackRoutes.OWNER_REPOS_SEARCH]: {
    owner: 'org' | 'user'
  };
}
export type SearchStackScreenProp<T extends keyof SearchStackNavigatorParamsList> =
  CompositeScreenProps<
  NativeStackScreenProps<SearchStackNavigatorParamsList, T>,
  MainBottomTabScreenProp<keyof MainBottomTabNavigatorParamsList>
  >

export type AuthStackNavigatorParamsList = {
  [AuthStackRoutes.LOGIN]: undefined;
  [AuthStackRoutes.SIGNUP]: undefined;
}
export type AuthStackScreenProp<T extends keyof AuthStackNavigatorParamsList> =
  NativeStackScreenProps<AuthStackNavigatorParamsList, T>;
