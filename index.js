const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Array of temperatures in degrees Celsius
let temperatures = [22, 26, 19, 30, 23, 28, 17, 31];

// Function to filter temperatures above 25 degrees Celsius
function filterHighTemperatures(ele) {
  return ele > 25;
}

// Endpoint 1: Given an array of temperatures, return only the temperatures above 25 degrees Celsius
app.get('/high-temperatures', (req, res) => {
  let result = temperatures.filter((ele) => filterHighTemperatures(ele));

  res.json(result);
});

// Array of prices in rupees
let prices = [80, 120, 95, 150, 60, 110];

// Function to filter prices less than or equal to 100
function filterLowPrices(ele) {
  return ele <= 100;
}

// Endpoint 2: Given an array of prices, return only the prices less than or equal to 100
app.get('/low-prices', (req, res) => {
  let result = prices.filter((ele) => filterLowPrices(ele));

  res.json(result);
});

// Array of product ratings (out of 5)
let ratings = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];

// Function to filter ratings greater than 3.5
function filterHighRatings(ele) {
  return ele > 3.5;
}

// Endpoint 3: Given an array of product ratings, return only the ratings greater than 3.5
app.get('/high-ratings', (req, res) => {
  let result = ratings.filter((ele) => filterHighRatings(ele));

  res.json(result);
});

// Array of Indian names
let indianNames = [
  'Akshay',
  'Priyanka',
  'Arjun',
  'Anushka',
  'Rajesh',
  'Kavita',
];

// Function to filter names longer than 6 characters
function filterLongIndianNames(ele) {
  return ele.length > 6;
}

// Endpoint 4: Given an array of Indian names, return only the names longer than 6 characters
app.get('/long-indian-names', (req, res) => {
  let result = indianNames.filter((ele) => filterLongIndianNames(ele));

  res.json(result);
});

// Array of product prices
let productPrices = [10, 25, 50, 75, 100, 150, 200];

// Function to filter products cheaper than a certain price
function filterCheaperProducts(ele, filterParam) {
  return ele < filterParam;
}

// Endpoint 5: Given an array of product prices, return only the products cheaper than a certain price
app.get('/cheaper-products', (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = productPrices.filter((ele) =>
    filterCheaperProducts(ele, filterParam)
  );

  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
