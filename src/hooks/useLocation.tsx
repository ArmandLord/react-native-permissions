import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>();

  useEffect(() => {
    getCurrentLocation()
      .then(location => {
        setInitialPosition(location);
        setHasLocation(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getCurrentLocation = () => {
    return new Promise<Location>((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          resolve({
            latitude,
            longitude,
          });
        },
        error => {
          reject({error});
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  };

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
  };
};
