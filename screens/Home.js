import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import color from "../assets/theme/color";
import FlatButton from "../component/Buttons/FlatButton";
import FlatButtonSecondary from "../component/Buttons/FlatButtonSecondary";
import { auth } from "../firebase/firebase.config";

export default function Home() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 30, color: color.primary }}>
          Horsing around!!
        </Text>
      </View>

      <FlatButton
        text="Login"
        color={color.primary}
        onPress={() => console.log()}
      />

      <FlatButtonSecondary
        text="Sign up"
        color={color.primary}
        onPress={() => console.log()}
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
