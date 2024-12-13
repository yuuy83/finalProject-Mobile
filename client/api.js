import sanityClient from "./sanity";

// Function to create a GROQ query and fetch data using Sanity client
let sanityQuery = (query, params) => sanityClient.fetch(query, params);

// Fetch featured restaurants
export const getFeaturedRestaurants = () => {
    return sanityQuery(`
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
            name
          }
        }
      }
    `);
  };
  

  export const getCategories = () => {
    return sanityQuery('*[_type == "category"]');
  };
  
  export const getFeatureRestaurantById = (id) => {
    return sanityQuery(
      '*[_type == "featured" && _id==$id]{...,restaurants[]->{...,dishes[]->,type->{name}}}[0]',
      { id }
    );
  };
  