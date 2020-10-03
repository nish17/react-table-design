# React Data Table

### Deployed on [![Netlify Status](https://api.netlify.com/api/v1/badges/2e2cbc9b-4eb1-43a7-a0d5-f51d5195606f/deploy-status)](https://app.netlify.com/sites/heuristic-raman-77b107/deploys)

### Check it out: https://reverieinc.snimesh.com

## Problem Statement:

Task is to design a Data-Table Component in React.js, which can scale well for more than 50k+ rows.

Basic idea is to implement infinite and virtual scrolling.

## What is virtual scrolling?

Virtual scrolling is basically a way of rendering only the elements visible to screen. 
On Scroll, we keep on swapping the elements which are not visible. It helps in improving web app's performance when Table contains a lot of data.   

## Approach:

1 After fetching the data from the API, I convert it two different Arrays.
  - Columns Array
  - Rows Array

2 I keep the first 20 elements of Rows in the initial 

3 Using IntersectionObserver API, I check if the user has already scrolled to the bottom most part section, and if that's case, I keep on appending more results to the existing state.

## Assumptions

- Data fetched from the API contains same obj structure. 
    (Meaning, I don't have to loop through the whole data to figure out the table headers, if data coming from API is not same, 
    then I will have to loop through the complete array and figure out the table headers)

### Known Issues

- Chrome allows 31.5Million DOM nodes at a time, with my approach if the data is very large, the UI may get sluggish.


### Other Possible Solutions.
- [React-virtualized](https://github.com/bvaughn/react-virtualized) (React components for efficiently rendering large lists and tabular data)