import React, { useCallback, VFC } from 'react';
import {
  View, Text, StyleSheet, FlatList, ListRenderItem
} from 'react-native';

import { MainBottomTabRoutes, SearchStackRoutes } from 'navigation/routes';
import { MainBottomTabScreenProp } from 'navigation/types';


export const Explore: VFC<MainBottomTabScreenProp<MainBottomTabRoutes.EXPLORE>> = () => {

  return (
    <View>
      <Text>Explore</Text>
    </View>
  );
};
