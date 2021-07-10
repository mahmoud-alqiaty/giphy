//Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"
export const LOCALSTORAGE_HISTORY = "LOCALSTORAGE_HISTORY"
export const UPDATE_FHISTORY = "UPDATE_FHISTORY"
export const UPDATE_SHISTORY = "UPDATE_SHISTORY"
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
                
        case UPDATE_FHISTORY:
        {
            const isExistCategory = 
            state.firstSiteHistory.findIndex(item=> item === payload) >= 0
            const updatedFHistory = isExistCategory?  
                [...state.firstSiteHistory] : 
                [...state.firstSiteHistory, payload]

            if(localStorage){
                localStorage.setItem('history', JSON.stringify({fHistory: updatedFHistory , sHistory: state.secondSiteHistory}))
            }
            return{
                ...state,
                firstSiteHistory:  [...updatedFHistory],
            }
        }
                
        case UPDATE_SHISTORY:
        {   const isExistCategory = 
            state.secondSiteHistory.findIndex(item=> item === payload) >= 0
            const updatedSHistory = isExistCategory?  
                [...state.secondSiteHistory] : 
                [...state.secondSiteHistory, payload]

            if(localStorage){
                localStorage.setItem('history', JSON.stringify({fHistory: state.firstSiteHistory, sHistory: updatedSHistory}))
            }
            return{
                ...state,
                secondSiteHistory:  [...updatedSHistory],
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
                
        case LOCALSTORAGE_HISTORY:
        {   
            return{
                ...state,
                firstSiteHistory: payload.fHistory? payload.fHistory : [],
                secondSiteHistory: payload.sHistory? payload.sHistory : []
            }
        }
                
        default:
            return state
    }
}