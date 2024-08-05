import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you've installed @expo/vector-icons

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login with", username, password);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/gel-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to GMatch2! </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <ThemedText type="link">ログインできませんか？</ThemedText>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="logo-google" size={32} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-facebook" size={32} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-apple" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  reactLogo: {
    height: 50,
    width: 350,
    bottom: 100,
    left: 5,
    position: "absolute",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});
