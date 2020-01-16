import uuid from 'uuid'
import { GET_DATAS, ADD_DATA, DELETE_DATA } from '../actions/types'

const initialState = {
    datas: [
        {id: uuid(), name: 'Dante'},
        {id: uuid(), name: 'Vergil'},
        {id: uuid(), name: 'Nero'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATAS:
            return {
                ...state
            }
        default: 
            return state
    }
}