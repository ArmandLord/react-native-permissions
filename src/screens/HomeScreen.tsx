import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const dataMembers = [
  {
    id: 1,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@ironhack.com',
    phone: '1234567890',
    avatar: 'https://loremflickr.com/320/240',
  },
  {
    id: 2,
    name: 'Pedro',
    lastName: 'Perez',
    email: 'pedro@gmail.com',
    phone: '1234567890',
    avatar: 'https://loremflickr.com/320/240',
  },
  {
    id: 3,
    name: 'Maria',
    lastName: 'Perez',
    email: 'maria@ironhack.com',
    phone: '1234567890',
    avatar: 'https://loremflickr.com/320/240',
  },
];

export const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() =>
          navigate('Profile', {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            email: 'juan@ironhack.com',
            phone: '1234567890',
            avatar: 'https://loremflickr.com/320/240',
          })
        }
        style={styles.menuButton}>
        <Text style={styles.textButton}>Go to Profile</Text>
        <Text style={styles.iconButton}>▶</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('MembersTeam', {dataMembers})}
        style={styles.menuButton}>
        <Text style={styles.textButton}>Go to MembersTeam</Text>
        <Text style={styles.iconButton}>▶</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuButton: {
    // backgroundColor: 'red',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9d9d9d',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    flex: 1,
  },
  iconButton: {
    fontSize: 20,
    color: '#5c5c5c',
  },
});
