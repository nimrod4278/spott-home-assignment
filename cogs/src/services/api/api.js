import api from './config'

export const  get = async (path) => {
    return await api.get(path)
}

export const  post = async (path, data) => {
    return await api.post(path, {data})
}