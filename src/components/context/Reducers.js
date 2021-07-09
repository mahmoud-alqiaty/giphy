//Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"
export const FETCH_UPDATE_FHISTORY = "FETCH_UPDATE_FHISTORY"
export const FETCH_UPDATE_SHISTORY = "FETCH_UPDATE_SHISTORY"
export const CLEAR_FHISTORY = "CLEAR_FHISTORY"
export const CLEAR_SHISTORY = "CLEAR_SHISTORY"

//Initial State
export const initialState = {
    loading: false,
    data: [],
    error: '',
    firstSiteHistory: [],
    secondSiteHistory: []
}

//Reducer Function
export const reducer = (state, {type, payload})=>{
    switch (type) {
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                loading: true,
                data: [],
                error: ''
            }
                
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload,
                error: ''
            }
                
        case FETCH_DATA_ERROR:
            return{
                ...state,
                loading: false,
                data: [],
                error: payload
            }
                
        case FETCH_UPDATE_FHISTORY:
        {
            const isExistCategory = 
            state.firstSiteHistory.findIndex(item=> item === payload) >= 0
            return{
                ...state,
                firstSiteHistory:  isExistCategory?  
                [...state.firstSiteHistory] : 
                [...state.firstSiteHistory, payload],
            }
        }
                
        case FETCH_UPDATE_SHISTORY:
        {   const isExistCategory = 
            state.secondSiteHistory.findIndex(item=> item === payload) >= 0
            return{
                ...state,
                secondSiteHistory:  isExistCategory?  
                [...state.secondSiteHistory] : 
                [...state.secondSiteHistory, payload],
            }
        }

        case CLEAR_FHISTORY:
        {   
            return{
                ...state,
                firstSiteHistory: []
            }
        }

        case CLEAR_SHISTORY:
        {   
            return{
                ...state,
                secondSiteHistory: []
            }
        }
                
        default:
            return state
    }
}