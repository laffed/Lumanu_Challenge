import React, {
  useState, useCallback, useMemo, VFC
} from 'react';
import {
  View, StyleSheet, Image, Alert
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { noop } from 'lodash';
import { useForm, Controller, ControllerProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ViewLP } from 'components/LoadingProvider';
import { AuthStackRoutes } from 'navigation/routes';
import { AuthStackScreenProp } from 'navigation/types';

import { robot } from '../../../assets/images';


type FormFields = {
  username: string;
  password: string;
}

const RequiredMessage = 'Required field';
const loginSchema = yup.object().shape({
  username: yup.string().required(RequiredMessage),
  password: yup.string().required(RequiredMessage),
});

const alerts = {
  login:[{
    t: 'Yikes...',
    s: 'So... it looks like you\'re not on the list. Could you go stand over there? We just can\'t be seen with non members...',
    c: 'that\'s embarrassing',
  },
  {
    t: 'Really?',
    s: 'Please don\'t make us call the cops...',
    c: 'sadly saunter away',
  },
  {
    t: '*sounds of hip music and laughter*',
    s: 'peering through the window you see a large gathering of people who are clearly cooler than you',
    c: 'weep deeply',
  }],
  signup: {
    t: 'On second thought...',
    s: 'We\'re not sure you\'d be a good fit. But hey, if you promise to wear this paper bag over you\'re head, you can come in as a stranger.',
  },
};

export const Login: VFC<AuthStackScreenProp<AuthStackRoutes.LOGIN>> = () => {
  const {
    control,
    handleSubmit,
  } = useForm<FormFields>({ resolver: yupResolver(loginSchema) });
  const [i, setI] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(() => {
    const { t, s, c } = alerts.login[i];
    const onPress = () => {
      if (i < 2) {
        setI(prev => prev + 1);
      }
    };
    Alert.alert(t, s, [{ text: c, onPress }]);
  }, [i, setI]);

  const handleSignup = useCallback(() => {
    Alert.alert(alerts.signup.t, alerts.signup.s);
  }, []);

  const handlePlacePaperBagOverHead = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const createRenderer = <T extends keyof FormFields>() => {
    const renderTextInput: ControllerProps<FormFields, T>['render'] = ({
      field: { onChange, onBlur, value, name },
    }) => {
      const onChangeText = (value: string) => onChange(value);
      const isPrivate = name === 'password';
      const returnKeyType = isPrivate ? 'send' : 'next';

      return (
        <TextInput
          mode='outlined'
          secureTextEntry={ isPrivate }
          style={ styles.inputBox }
          label={ name }
          placeholder={ name }
          keyboardType="default"
          returnKeyType={ returnKeyType }
          onBlur={ onBlur }
          onChangeText={ onChangeText }
          value={ value }
          autoComplete={ !isPrivate }
        />
      );
    };

    return renderTextInput;
  };

  return (
    <ViewLP
      show={ loading }
    >
      <View style={ styles.container }>
        <View style={ styles.imgContainer }>
          <Image
            source={ robot }
            style={ [styles.image] }
          />
        </View>
        <View style={ styles.formContainer }>
          <Controller
            control={ control }
            name="username"
            defaultValue=""
            render={ createRenderer<'username'>() }
          />
          <Controller
            control={ control }
            name="password"
            defaultValue=""
            render={ createRenderer<'password'>() }
          />
        </View>
        <Button
          onPress={ handleSubmit(handleLogin) }
          mode='contained'
          color="#fff"
          style={ styles.loginContainer }
        >
          Login
        </Button>
        <Button
          onPress={ handleSignup }
          mode='text'
        >
          Not a member? Sign up!
        </Button>
        <Button
          onPress={ handlePlacePaperBagOverHead }
          mode='text'
          color='#000'
          style={ styles.continueContainer }
        >
          Continue as a stranger
        </Button>
      </View>
    </ViewLP>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: {
    flex: .6,
    paddingBottom: 7,
    justifyContent: 'flex-end',
  },
  formContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: '65%',
    resizeMode: 'contain',
  },
  inputBox: {
    width: '70%',
    textAlign: 'left',
    margin: 7,
  },
  loginContainer: {
    borderColor: '#fff',
    width: 200,
    marginTop: 18,
    marginBottom: 10,
  },
  continueContainer: {
    position: 'absolute',
    bottom: 25,
  },
  button: {
    fontWeight: 'bold',
  },
  loginButton: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});
