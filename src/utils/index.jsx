import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
})

export const formetPrice = (price) => {
  const ruppesAmount = new Intl.NumberFormat('INR', {
    style: 'currency',
    currency: 'INR',
  }).format((price / 100).toFixed(2))
  return ruppesAmount
}
