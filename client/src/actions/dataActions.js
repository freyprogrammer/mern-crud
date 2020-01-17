import { GET_DATAS, ADD_DATA, DELETE_DATA } from './types'

export const getDatas = () => {
    return {
        type: GET_DATAS
    }
}

export const deleteData = id => {
    return {
        type: DELETE_DATA,
        payload: id
    }
}