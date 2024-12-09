import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { themeColors } from "../theme";

export default function OrderPreparingScreen() {
  const navigation = useNavigation();
  const [orderFailed, setOrderFailed] = useState(false); // State to track order status

  useEffect(() => {
    const timer = setTimeout(() => {
      const random = Math.random(); // Generate a random number between 0 and 1
      if (random < 0.8) {
        // 80% chance: Navigate to "Delivery"
        navigation.navigate("Delivery");
      } else {
        // 20% chance: Show "Order Failed" message and navigate back
        setOrderFailed(true);
        setTimeout(() => {
          navigation.goBack();
        }, 2000); // Show "Order Failed" for 2 seconds before navigating back
      }
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/delivery.png")}
        style={styles.image}
      />
      {!orderFailed ? (
        <>
          <Text style={styles.text}>Preparing your order...</Text>
          <ActivityIndicator
            size="large"
            color={themeColors.bgColor(1)}
            style={styles.loader}
          />
        </>
      ) : (
        <Text style={styles.failedText}>Order Failed</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.bgColor(0.1),
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  failedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
  },
  loader: {
    marginTop: 20,
  },
});
