import React, { useState } from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../assets/theme/color';

const FlatButtonSecondary = ({ text, onPress, color }) => {
  return (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={onPress}>
      <View style={[styles.button, { borderColor: color }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButtonSecondary;
