import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({  }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempted with:", email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Logo/Header Section */}
      <View style={styles.header}>
        <Icon.Coffee stroke={themeColors.bgColor(1)} width={80} height={80} />
        <Text style={styles.headerText}>Food Delivery</Text>
      </View>
     
      {/* Login Form */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon.Mail height={20} width={20} stroke="gray" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon.Lock height={20} width={20} stroke="gray" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: themeColors.bgColor(1) }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={[styles.signupLink, { color: themeColors.bgColor(1) }]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={[styles.signupLink, { color: themeColors.bgColor(1) }]}
            >
              Start as a Guest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    background: {
      ...StyleSheet.absoluteFillObject,
    },
    header: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 40,
    },
    headerText: {
      fontSize: 32,
      fontWeight: "bold",
      marginTop: 10,
      color: "black",
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
    formContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 12,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: "#333",
    },
    button: {
      backgroundColor: themeColors.bgColor(1),
      padding: 16,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    signupContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    signupText: {
      color: "black",
      fontSize: 14,
    },
    signupLink: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
      textDecorationLine: "underline",
    },
    guestLink: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
      textDecorationLine: "underline",
    },
  });