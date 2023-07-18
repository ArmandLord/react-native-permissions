import React, {PropsWithChildren, useEffect, useReducer} from 'react';
import {PermissionsContext} from './PermissionsContext';
import {
  PERMISSIONS,
  PermissionStatus,
  check,
  openSettings,
  request,
} from 'react-native-permissions';
import {reducer} from './PermissionsReducer';
import {AppState, Platform} from 'react-native';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

export const PermissionsProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, permissionsInitState);

  useEffect(() => {
    checkLocationPermission();
    AppState.addEventListener('change', status => {
      //   console.log({status});

      if (status !== 'active') return;
      checkLocationPermission();
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    if (permissionStatus === 'blocked') {
      openSettings();
    }

    dispatch({
      type: 'ASK_LOCATION_PERMISSION',
      payload: permissionStatus,
    });
  };

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    dispatch({
      type: 'CHECK_LOCATION_PERMISSION',
      payload: permissionStatus,
    });
  };

  return (
    <PermissionsContext.Provider
      value={{
        state,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
