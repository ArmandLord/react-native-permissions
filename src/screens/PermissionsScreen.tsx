import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {PermissionsContext} from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const {state, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={style.container}>
      <Text>PermissionsScreen</Text>
      <Button title="Permissions" onPress={askLocationPermission} />
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
