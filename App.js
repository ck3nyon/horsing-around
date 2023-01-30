import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./component/Input";
import FlatButton from "./component/Buttons/FlatButton";
import FlatButtonSecondary from "./component/Buttons/FlatButtonSecondary";
import color from "./assets/theme/color";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyAnkREs9p-B3YrLTSX-lW8_9JuWuCRmd54",
    authDomain: "horsing-around-7b878.firebaseapp.com",
    projectId: "horsing-around-7b878",
    storageBucket: "horsing-around-7b878.appspot.com",
    messagingSenderId: "246184910829",
    appId: "1:246184910829:web:4c9e09913fc5966344d1e4",
    measurementId: "G-DJMQ1CDQDS",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

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
