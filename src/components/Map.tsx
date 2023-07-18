import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import Fab from './Fab';

export const Map = () => {
  const {hasLocation, initialPosition} = useLocation();
  const mapViewRef = useRef<MapView>();

  const centerPosition = async () => {
    mapViewRef.current?.animateCamera({
      center: {
        latitude: initialPosition!.latitude,
        longitude: initialPosition!.longitude,
      },
    });
  };

  return (
    <View style={styles.container}>
      {hasLocation && (
        <MapView
          ref={el => (mapViewRef.current = el!)}
          provider={PROVIDER_GOOGLE} //podemos utilizar el provider de google o el default
          style={styles.map}
          showsUserLocation={true}
          region={{
            latitude: initialPosition!.latitude,
            longitude: initialPosition!.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {/* {this.state.markers.map((marker, index) => ( */}
          {/* <Marker
              //   key={index}
              image={require('../../assets/marker.png')}
    
              coordinate={{
                latitude: 23.634501,
                longitude: -102.552784,
              }}
              title={'title'}
              description={'description'}
            /> */}
          {/* ))} */}
        </MapView>
      )}
      <Fab
        icon="+"
        onPress={() => {
          centerPosition();
        }}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    flex: 1,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
