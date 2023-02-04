import { Platform, StyleSheet } from "react-native";
import { AuthContextProvider } from "./context/AuthContext";
import Route from "./Route";

export default function App() {
  return (
    <AuthContextProvider>
      <Route />
    </AuthContextProvider>
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
