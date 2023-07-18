import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  icon: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Fab = ({icon = '', onPress, style = {}}: Props) => {
  return (
    <View style={style}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={customStyle.blackBtn}>
        <Text style={customStyle.text}>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fab;

export const customStyle = StyleSheet.create({
  blackBtn: {
    zIndex: 9999,
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
