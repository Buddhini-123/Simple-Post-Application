import axios from "axios"

const getAllPosts = async () => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        return data
      } catch (error) {
        console.error('', error)
        throw error
    }
}

const getPostById = async (id: string) => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
