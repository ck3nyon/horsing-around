import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import color from "../assets/theme/color";
import { screenWidth } from "../assets/usefull";
import FlatButton from "../component/Buttons/FlatButton";
import Input from "../component/Input";
import { collection, addDoc, doc, Firestore, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";

export default function Horse({ navigation }) {
  const [name, setName] = useState();

  const handleCreate = async () => {
    try {
      if (name) {
        const uid = auth.currentUser.uid;
        await addDoc(collection(db, "User", uid, "Horse"), {
          name,
        });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    if (name) {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 30, color: color.primary }}>Horse page</Text>
      </View>

      <Input
        lable="Name"
        onChangeText={setName}
        value={name}
        icon="email-variant"
        iconPosition="left"
      />
      <FlatButton
        text="Create"
        color={color.primary}
        onPress={() => handleCreate()}
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
  mainBox: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    backgroundColor: "rgba(241, 41, 121, 0.05)",
    borderRadius: 15,
    marginTop: 50,
    flexDirection: "row",
  },
  mainButton: {
    width: screenWidth / 3 / 2 - 7.5,
    height: screenWidth / 3 / 2 - 7.5,
    backgroundColor: "rgba(241, 41, 121, 0.15)",
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
