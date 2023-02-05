import React, { useState } from "react";
import styles from "./styles";
import { View, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../assets/theme/color";

const Input = ({
  onChangeText,
  value,
  lable,
  icon,
  iconPosition,
  error,
  secureTextEntry,
}) => {
  const [focused, setFocused] = useState(false);

  //   const getBorderColor = () => {
  //     if (focused) return colors.primary;
  //     if (error) return colors.danger;
  //     else return colors.gray;
  //   };

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") return "row";
      else return "row-reverse";
    }
  };

  return (
    <View style={styles.inputContainer}>
      {lable && (
        <Text style={{ color: focused ? colors.primary : colors.gray }}>
          {lable}
        </Text>
      )}
      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "stretch" },
          {
            borderColor: focused ? colors.primary : colors.gray,
            flexDirection: getFlexDirection(),
          },
        ]}
      >
        <View>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={focused ? colors.primary : colors.gray}
            />
          )}
        </View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.textInput}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
