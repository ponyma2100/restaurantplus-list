const Restaurant = require('../restaurant') // 載入restaurant model
const restaurantList = require('../restaurant.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  const results = restaurantList.results
  for (let i = 0; i < results.length; i++) {
    Restaurant.create(results[i])
  }
  console.log('data is build!')
})