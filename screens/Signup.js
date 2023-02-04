import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import color from "../assets/theme/color";
import FlatButton from "../component/Buttons/FlatButton";
import FlatButtonSecondary from "../component/Buttons/FlatButtonSecondary";
import Input from "../component/Input";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const handleLogin = () => {
    setError("Invalid email or password!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 30, color: color.primary }}>
          Horsing around!!
        </Text>
      </View>

      <Input
        lable="Emailddd"
        onChangeText={setEmail}
        value={email}
        icon="email-variant"
        iconPosition="left"
      />

      <Input
        lable="Password"
        onChangeText={setPassword}
        value={password}
        icon="lock-open"
        iconPosition="left"
        error={error}
        secureTextEntry={true}
      />
      <Input
        lable="Password"
        onChangeText={setPassword}
        value={password}
        icon="lock-open"
        iconPosition="left"
        error={error}
        secureTextEntry={true}
      />

      <FlatButtonSecondary
        text="Sign up"
        color={color.primary}
        onPress={() => handleLogin()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
    padding: 15,
  },
  logo: {
    marginBottom: 15,
    marginTop: 20,
  },
});
