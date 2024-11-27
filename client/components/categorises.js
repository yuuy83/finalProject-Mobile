import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryContainer}
              onPress={() => setActiveCategory(category.id)}
            >
              <View style={styles.textImageContainer}>
                <Image
                  style={[
                    styles.categoryImage,
                    isActive && styles.activeCategoryImage, // Change border color around the image
                  ]}
                  source={category.image}
                />
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  textImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Add border around the text and image
    borderColor: "#ddd", // Default border color
    borderRadius: 10,
    padding: 8,
  },
  categoryImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2, // Add border around the image
    borderColor: "#ddd", // Default border color
  },
  activeCategoryImage: {
    borderColor: "#f97316", // Change the border color for the active image
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    color: "#333", // Default text color
  },
});
