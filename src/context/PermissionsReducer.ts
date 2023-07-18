import {PermissionStatus} from 'react-native-permissions';
import {PermissionsState} from './PermissionsProvider';

type PermissionsAction =
  | {
      type: 'ASK_LOCATION_PERMISSION';
      payload: PermissionStatus;
    }
  | {
      type: 'CHECK_LOCATION_PERMISSION';
      payload: PermissionStatus;
    };

export const reducer = (
  state: PermissionsState,
  action: PermissionsAction,
): PermissionsState => {
  switch (action.type) {
    case 'ASK_LOCATION_PERMISSION':
      return {
        ...state,
        locationStatus: action.payload,
      };
    case 'CHECK_LOCATION_PERMISSION':
      return {
        ...state,
        locationStatus: action.payload,
      };
    default:
      return state;
  }
};
