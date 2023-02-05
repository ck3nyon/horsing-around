import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import color from "../assets/theme/color";
import { screenWidth } from "../assets/usefull";
import FlatButton from "../component/Buttons/FlatButton";
import FlatButtonSecondary from "../component/Buttons/FlatButtonSecondary";
import { auth } from "../firebase/firebase.config";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const horsePress = () => {
    navigation.navigate("Horse");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 30, color: color.primary }}>
          Horsing around!!
        </Text>
        <View style={styles.mainBox}>
          <View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => horsePress()}
            >
              <MaterialCommunityIcons
                name="horse-variant"
                size={35}
                color="rgba(241, 41, 121, 0.7)"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton}>
              <MaterialCommunityIcons
                name="barn"
                size={35}
                color="rgba(241, 41, 121, 0.7)"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.mainButton}>
              <Ionicons
                name="settings-sharp"
                size={35}
                color="rgba(241, 41, 121, 0.7)"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton}>
              <FontAwesome5
                name="book-medical"
                size={35}
                color="rgba(241, 41, 121, 0.7)"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

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
