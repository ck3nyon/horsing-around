import { StyleSheet } from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderWidth: 2,
  },
  buttonText: {
    color: color.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
  },
});
