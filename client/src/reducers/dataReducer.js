import uuid from 'uuid'
import { GET_DATAS, ADD_DATA, DELETE_DATA } from '../actions/types'

const initialState = {
    datas: [
        {id: uuid(), name: 'Frey'},
        {id: uuid(), name: 'Vhans'},
        {id: uuid(), name: 'Robin'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATAS:
            return {
                ...state
            }
        case DELETE_DATA:
            return {
                ...state,
                datas: state.datas.filter(data => data.id !== action.payload)
            }
        default: 
            return state
    }
}