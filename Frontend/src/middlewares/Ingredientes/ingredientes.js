import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()
export const getIngredientes = async () => {
  try {
    let { data } = await axios.get(`${import.meta.env.VITE_API}/ingredient`)

    return data.ingredients
  } catch (error) {
    console.log(
      '🚀 ~ file: ingredientes.js:10 ~ getIngredientes ~ error:',
      error.message
    )
  }
}
