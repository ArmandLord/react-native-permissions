import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ProfileScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.menuButton}>
        <Text style={styles.textButton}>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{uri: props.route.params.avatar}}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            {props.route.params.name} {props.route.params.lastName}
          </Text>
          <Text style={{fontSize: 15, color: '#fff', marginBottom: 15}}>
            {props.route.params.email}
          </Text>
          <Text style={{fontSize: 15, color: '#fff'}}>
            {props.route.params.phone}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  avatarContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#ffffff62',
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
  },
  menuButton: {
    // backgroundColor: 'red',
    padding: 10,
    borderWidth: 1,
    borderColor: '#211d1d',
    borderRadius: 10,
    marginBottom: 20,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    flex: 1,
  },
});
