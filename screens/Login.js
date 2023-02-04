import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import color from "../assets/theme/color";
import FlatButton from "../component/Buttons/FlatButton";
import FlatButtonSecondary from "../component/Buttons/FlatButtonSecondary";
import Input from "../component/Input";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [state, dispatch] = useContext(AuthContext);

  auth.onAuthStateChanged((user) => {
    console.log("triggered", user.email);
    dispatch({
      type: "user_login",
      payload: true,
    });
  });

  const validate = () => {
    if (email && password) return true;
    return false;
  };

  const handleLogin = () => {
    if (validate()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("email ---->", user.email);
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found")
            setError("Email does not exist");
          if (error.code === "auth/wrong-password")
            setError("Incorrect password");
          if (error.code === "auth/invalid-email")
            setError("Invalid email address");
          console.log(error.code);
        });
    }
  };
  // setError("Invalid email or password!");

  //  console.log(auth.currentUser);

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
        error={error}
        secureTextEntry={true}
      />
      <FlatButton
        text="Login"
        color={color.primary}
        onPress={() => handleLogin()}
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
