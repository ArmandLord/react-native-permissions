import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen, MapScreen, PermissionsScreen} from '../screens';
import {PermissionsContext} from '../context/PermissionsContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {state} = useContext(PermissionsContext);

  if (state.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="PermissionsScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {state.locationStatus === 'granted' ? (
        <Stack.Screen name="Map" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};
