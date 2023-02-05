import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./screens/Home";
import Horse from "./screens/Horses";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export function Auth() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

export function Main() {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Horse"
        component={Horse}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
function Route() {
  const [state] = useContext(AuthContext);
  console.log("state", state);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={state.isLogin ? Main : Auth}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
