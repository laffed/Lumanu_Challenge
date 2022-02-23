import React, { useCallback, useMemo, VFC } from 'react';
import { View } from 'react-native';
import { Button, Caption, Title } from 'react-native-paper';

import { MainBottomTabRoutes, SearchStackRoutes } from 'navigation/routes';
import { SearchStackScreenProp } from 'navigation/types';


export const SearchBy: VFC<SearchStackScreenProp<SearchStackRoutes.SEARCH_BY>> = ({ navigation }) => {

  const onOwnerAndRepoSearch = useCallback(() => {
    navigation.navigate(SearchStackRoutes.OWNER_AND_REPO_SEARCH);
  }, [navigation]);

  const onOwnerReposSearch = useMemo(() => {
    return (owner: 'org' | 'user') => () => {
      navigation.navigate(SearchStackRoutes.OWNER_REPOS_SEARCH, {
        owner,
      });
    };
  }, [navigation]);

  const onAllPublic = useCallback(() => {
    navigation.navigate(MainBottomTabRoutes.EXPLORE);
  }, [navigation]);

  return (
    <View>
      <Title>How Would You Like to Search?</Title>
      <Caption>I know the exact repo name and owner</Caption>
      <Button
        mode='text'
        onPress={ onOwnerAndRepoSearch }
      >
        By Owner And Repo
      </Button>
      <Caption>
        {'I want to see a particular user\'s repos'}
      </Caption>
      <Button
        mode='text'
        onPress={ onOwnerReposSearch('user') }
      >
        User Repos
      </Button>
      <Caption>
        {'I want to see a particular organization\'s repos'}
      </Caption>
      <Button
        mode='text'
        onPress={ onOwnerReposSearch('org') }
      >
        Organization Repos
      </Button>
      <Caption>No idea!</Caption>
      <Button
        mode='text'
        onPress={ onAllPublic }
      >
        Explore
      </Button>
    </View>
  );
};
