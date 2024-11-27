import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categorises from "../components/categorises";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Search Bar Container */}
      <View style={styles.searchContainer}>
        {/* Search Icon */}
        <Icon.Search
          height={25}
          width={25}
          stroke="gray"
          style={styles.searchIcon}
        />

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search for restaurants, food..."
          placeholderTextColor="gray"
        />

        {/* Location Section */}
        <View style={styles.locationContainer}>
          <Icon.MapPin height={20} width={20} stroke="gray" />
          <Text style={styles.locationText}>Binh Duong</Text>
        </View>

        {/* Filter Icon */}
        <View
          style={[
            styles.filterContainer,
            { backgroundColor: themeColors.bgColor(1) },
          ]}
        >
          <Icon.Sliders
            height={25}
            width={25}
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* Main*/}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Caegorises*/}
        <Categorises />
        {/* Caegorises*/}
        <View>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurant={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // Light background
    paddingHorizontal: 16, // Padding for content
    paddingTop: 10, // Slight padding for SafeAreaView
  },
  searchContainer: {
    flexDirection: "row", // Align items in a row
    alignItems: "center",
    backgroundColor: "#fff", // White background for the search bar
    borderRadius: 8, // Rounded corners
    paddingHorizontal: 10, // Internal horizontal padding
    paddingVertical: 8, // Internal vertical padding
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
    marginVertical: 10, // Space above and below the search bar
  },
  searchIcon: {
    marginRight: 8, // Space between the icon and the input field
  },
  searchInput: {
    flex: 1, // Take up remaining space
    height: 40, // Height of the input field
    fontSize: 16, // Font size for better readability
    color: "#000", // Input text color
  },
  locationContainer: {
    flexDirection: "row", // Align the location icon and text in a row
    alignItems: "center", // Vertically align the icon and text
    marginLeft: 10, // Space between the input and the location section
    marginRight: 8, // Space between the location section and the filter icon
  },
  locationText: {
    fontSize: 14, // Font size for the location text
    color: "gray", // Subtle color for the location text
    marginLeft: 4, // Space between the icon and the text
  },
  filterContainer: {
    width: 40, // Circle diameter
    height: 40, // Circle diameter
    borderRadius: 20, // Half of width/height to make it circular
    justifyContent: "center", // Center the icon
    alignItems: "center", // Center the icon
  },
});
