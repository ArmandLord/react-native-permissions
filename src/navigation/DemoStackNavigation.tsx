import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {MembersTeamScreen} from '../screens/MembersTeamScreen';

const Stack = createStackNavigator();

export const DemoStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="PermissionsScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MembersTeam" component={MembersTeamScreen} />
    </Stack.Navigator>
  );
};
