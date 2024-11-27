import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function DishRow({ item }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Dish Image */}
        <Image style={styles.image} source={item.image} />

        {/* Dish Details */}
        <View style={styles.details}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: themeColors.bgColor(1) }]}
            onPress={decreaseQuantity}
          >
            <Icon.Minus height={20} width={20} stroke="white" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: themeColors.bgColor(1) }]}
            onPress={increaseQuantity}
          >
            <Icon.Plus height={20} width={20} stroke="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  row: {
    flexDirection: "row", // Arrange image and details in a row
    justifyContent: "space-between", // Space between image and details
    alignItems: "center", // Align items vertically
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 10, // Space between image and text
  },
  details: {
    flex: 1, // Take up remaining space
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: "#777",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  controlButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
