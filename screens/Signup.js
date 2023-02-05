import { StatusBar } from "expo-status-bar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import color from "../assets/theme/color";
import FlatButton from "../component/Buttons/FlatButton";
import FlatButtonSecondary from "../component/Buttons/FlatButtonSecondary";
import Input from "../component/Input";
import { auth } from "../firebase/firebase.config";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const [error, setError] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const handleSignup = () => {
    if (email && password && password2) {
      if (password === password2) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {})
          .catch((error) => {
            console.log(error.code);
            if (error.code === "auth/invalid-email") {
              setError("Invalid email or password!");
            }
          });
      } else {
        setError("Password's dont match!");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 30, color: color.primary }}>
          Horsing around!!
        </Text>
      </View>

      <Input
        lable="Email"
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
        secureTextEntry={true}
      />
      <Input
        lable="Re-enter Password"
        onChangeText={setPassword2}
        value={password2}
        icon="lock-open"
        iconPosition="left"
        error={error}
        secureTextEntry={true}
      />

      <FlatButtonSecondary
        text="Sign up"
        color={color.primary}
        onPress={() => handleSignup()}
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
