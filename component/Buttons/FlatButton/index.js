import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const FlatButton = ({ text, onPress, color }) => {
  return (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={onPress}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;
