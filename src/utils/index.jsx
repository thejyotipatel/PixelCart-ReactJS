import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
})

// FORMATE PRICE IN INR
export const formetPrice = (price) => {
  const ruppesAmount = new Intl.NumberFormat('INR', {
    style: 'currency',
    currency: 'INR',
  }).format((price / 100).toFixed(2))
  return ruppesAmount
}

// AMOUNT OPTIONS
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}
