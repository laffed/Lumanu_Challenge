import React, { useCallback, VFC } from 'react';
import {
  View, Text, StyleSheet, FlatList, ListRenderItem
} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { MainBottomTabRoutes, SearchStackRoutes } from 'navigation/routes';
import { MainBottomTabScreenProp } from 'navigation/types';


type Dummy = {
  id: number;
  content: string;
}

const dummy: Dummy[] = [
  {
    id: 0,
    content: 'hello world',
  }
];
const empty: Dummy[] = [];

const ListEmptyComponent: VFC = () => {
  const { navigate } = useNavigation<MainBottomTabScreenProp<MainBottomTabRoutes.HOME>['navigation']>();
  const onPress = useCallback(() => {
    navigate(MainBottomTabRoutes.SEARCH, {
      screen: SearchStackRoutes.SEARCH_BY,
    });
  }, [navigate]);

  return (
    <View>
      <Text>
        Aww shucks, your Watchlist is empty
      </Text>
      <Button
        mode='contained'
        onPress={ onPress }
      >
        Add Repos
      </Button>
    </View>
  );
};

export const Home: VFC<MainBottomTabScreenProp<MainBottomTabRoutes.HOME>> = () => {

  const keyExtractor = (item: Dummy) => `${item.id}`;
  const renderItem: ListRenderItem<Dummy> = ({ item }) => {
    return (
      <View>
        <Text>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={ empty }
        renderItem={ renderItem }
        keyExtractor={ keyExtractor }
        ListEmptyComponent={ ListEmptyComponent }
      />
    </View>
  );
};
