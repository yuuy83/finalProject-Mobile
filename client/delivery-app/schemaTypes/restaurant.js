import {defineField, defineType} from 'sanity'

export default {
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'description',
      validation: (rule) => rule.required(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of restaurant',
    },
    {
      name: 'latitude',
      type: 'number',
      title: 'latitude of restaurant',
    },
    {
      name: 'longitude',
      type: 'number',
      title: 'longitude of restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'address of restaurant',
      validation: (rule) => rule.required(200),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a number between 1 to 5',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter a value between 1 to 5'),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'reviewws',
    },
    {
      name: 'type',
      title: 'Category',
      validation: (rule) => rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
