import React, {useReducer, useEffect, useState, useMemo} from 'react';
import {View, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import AuthContext from '../components/auth/context';
import {ActivityIndicator} from 'react-native-paper';

const MainNavigator = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (user1, userName) => {
        const userToken = String(user1.body);

        try {
          await AsyncStorage.setItem(
            'user',
            JSON.stringify({token: userToken, username: userName}),
          );
        } catch (e) {
          console.log(e);
        }
        console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', token: userToken});
        //AsyncStorage.setItem('token', resData.body); //JSON.stringify()
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('user');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        //setUserToken('asd');
        //setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('user');
      } catch (e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <DrawerNavigation />
        ) : (
          <MainNavigator.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login">
            <MainNavigator.Screen name="Login" component={LoginScreen} />
            <MainNavigator.Screen name="Register" component={RegisterScreen} />
          </MainNavigator.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
