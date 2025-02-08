import axios from "axios"

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const getAllPosts = async () => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/posts`)
        return data
      } catch (error) {
        console.error('', error)
        throw error
    }
}

const getPostById = async (id: string) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/posts/${id}`)
        return data
      } catch (error) {
        console.error('', error)
        throw error
    }
}

export {
    getAllPosts,
    getPostById
}
