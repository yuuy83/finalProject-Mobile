import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categoryList, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
          setActiveCategory(data[0]?._id || null); // Set initial active category
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {categoryList.map((category, index) => {
          const isActive = category._id === activeCategory;

          return (
            <View key={index} style={styles.textImageContainer}>
              <TouchableOpacity
                style={styles.categoryContainer}
                onPress={() => setActiveCategory(category._id)}
              >
                <Image
                  style={[
                    styles.categoryImage,
                    isActive && styles.activeCategoryImage,
                  ]}
                  source={{
                    uri: category.image
                      ? urlFor(category.image).url()
                      : "https://via.placeholder.com/150", // Fallback image
                  }}
                />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            </View>
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
    padding: 10, // Padding inside the container
    backgroundColor: "#fff", // White background

    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Add shadow effect (Android)
  },
  categoryImage: {
    width: 50, // Slightly larger image size
    height: 50,
    borderRadius: 25, // Full round image
  },
  activeCategoryImage: {
    borderColor: "#f97316", // Highlighted orange border for active
    borderWidth: 2,
  },
  categoryText: {
    fontSize: 12, // Smaller text size
    marginTop: 8,
    color: "#333", // Default dark text color
    fontWeight: "500", // Medium font weight
  },
});
