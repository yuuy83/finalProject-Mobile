import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    console.log("Signup attempted with:", { fullName, email, password, confirmPassword });

  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Logo/Header Section */}
      <View style={styles.header}>
        <Icon.Coffee stroke={themeColors.bgColor(1)} width={80} height={80} />
        <Text style={styles.headerText}>Create Account</Text>
      </View>

      {/* Signup Form */}
      <View style={styles.formContainer}>
        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <Icon.User height={20} width={20} stroke="gray" />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>

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

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Icon.Lock height={20} width={20} stroke="gray" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        {/* Signup Button */}
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: themeColors.bgColor(1) }]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginLink, { color: themeColors.bgColor(1) }]}>
              Login
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
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "gray",
    fontSize: 14,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: "bold",
  },
}); 