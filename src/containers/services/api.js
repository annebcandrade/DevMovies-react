import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'da1717628392d5cb8291beff06eb07eb',
        language: 'pt-BR',
        page: 1
    }
})

export default api