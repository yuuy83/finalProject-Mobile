import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurentCard";

export default function FeaturedRow({ title, description, restaurant = [] }) {
  return (
    <View style={styles.container}>
      {/* Title and See All Section */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={[styles.seeAllText, { color: themeColors.text }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Description Section */}
      <Text style={styles.description}>{description}</Text>

      {/* Restaurants Section */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {restaurant.map((restaurant, index) => (
          <RestaurantCard item={restaurant} key={index} />
        ))}
      </ScrollView>
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
  headerRow: {
    flexDirection: "row", // Arrange title and See All in a row
    justifyContent: "space-between", // Push them to opposite ends
    alignItems: "center", // Vertically align items
    marginBottom: 8, // Add space below the header row
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAllButton: {
    padding: 5, // Add padding for touch feedback
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  scrollContainer: {
    paddingBottom: 15,
  },
  noRestaurantsText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
});
