import { StyleSheet } from 'react-native';
import color from '../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  error: {
    color: color.danger,
    paddingTop: 4,
  },
});
