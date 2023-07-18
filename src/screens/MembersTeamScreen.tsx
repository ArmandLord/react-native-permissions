import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const MembersTeamScreen = (props: any) => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('Home')}
        style={styles.menuButton}>
        <Text style={styles.textButton}>Go Back</Text>
      </TouchableOpacity>
      {props.route.params.dataMembers.map((member: any) => (
        <View key={member.id} style={styles.cardContainer}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{uri: member.avatar}} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
              {member.name} {member.lastName}
            </Text>
            <Text style={{fontSize: 15, color: '#fff', marginBottom: 15}}>
              {member.email}
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>{member.phone}</Text>
          </View>
        </View>
      ))}
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
    marginBottom: 20,
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
