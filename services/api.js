import axios from "axios"

const api = axios.create({
    baseURL: 'http://10.0.2.2:1337/',
    timout: 10000
})

const getMarkers = async () => {
    try {
        const result = await api.get('markers')
        return result.data
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getMarkers
}
