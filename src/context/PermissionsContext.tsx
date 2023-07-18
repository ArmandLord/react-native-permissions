import {createContext} from 'react';
import {PermissionsState} from './PermissionsProvider';

export type PermissionsContextProps = {
  state: PermissionsState;
  // methods
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);
