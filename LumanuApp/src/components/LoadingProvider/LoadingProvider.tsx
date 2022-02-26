import React, {
  useMemo, FC, PropsWithChildren, VFC
} from 'react';
import {
  View, Text, StyleSheet, ViewStyle
} from 'react-native';
import LottieView from 'lottie-react-native';

import { rocket } from '../../../assets/animations';

import { randMessage } from './loadingMessages';


const Loader: VFC<{
  message?: string;
  loaderContainerStyles?: ViewStyle;
}> = ({ message, loaderContainerStyles }) => {
  const msg = useMemo(() => message ?? randMessage(), [message]);

  return (
    <View style={ loaderContainerStyles ?? defaultStyles.loadingContainer }>
      <LottieView
        source={ rocket }
        style={ defaultStyles.lottie }
        loop
        autoPlay
      />
      <Text style={ defaultStyles.msg }>
        {msg}
      </Text>
    </View>
  );
};

export const ViewLP: FC<PropsWithChildren<{
  show: boolean;
  message?: string;
  containerStyles?: ViewStyle;
  loaderContainerStyles?: ViewStyle
}>> = ({ show, message, containerStyles, loaderContainerStyles, children }) => {


  return (
    <View style={ containerStyles ?? defaultStyles.container }>
      {show && (
        <Loader
          message={ message }
          loaderContainerStyles={ loaderContainerStyles }
        />
      )}
      {!show && children}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
  },
  msg: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 0,
    alignSelf: 'center',
  },
  lottie: {
    width: '90%',
  },
});
