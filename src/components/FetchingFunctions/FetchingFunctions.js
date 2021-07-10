import axios from 'axios'
import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, UPDATE_FHISTORY, UPDATE_SHISTORY } from '../context/Reducers'


//Fetching Functions from Giphy

const api_Key = `xYJjWBAnruv7Lwre33zeMfWYulh1LQyP`

export const FetchTrendData = (dispatch)=> {
    // const {dispatch, searchTerm} = useContext(stateContext)
    dispatch({type: FETCH_DATA_REQUEST})
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${api_Key}`)
    .then(res=> {
        console.log(res.data.data)
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.data})
    })
    .catch(err=> {
        console.log(err.message)
        dispatch({type: FETCH_DATA_ERROR, payload: err.message})
    })
}

export const fetchSearchedDatac= (dispatch, searchTerm, location)  => {
    dispatch({type: FETCH_DATA_REQUEST})
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${api_Key}`)
    .then(res=> {
        console.log("search:" , res.data.data)
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.data})
        dispatch({type: UPDATE_FHISTORY, payload: searchTerm})
    })
    .catch(err=> {
        console.log(err.message)
        dispatch({type: FETCH_DATA_ERROR, payload: err.message})
    })
}


//Fetch Functions from Reddit

export const FetchTrendReddit = (dispatch)=> {

    dispatch({type: FETCH_DATA_REQUEST})
    axios.get(`https://www.reddit.com/r/trend/new.json?sort=new`)
    .then(res=> {
        console.log(res.data.data.children)
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.data.children})
    })
    .catch(err=> {
        console.log(err.message)
        dispatch({type: FETCH_DATA_ERROR, payload: err.message})
    })
}

export const fetchSearchedReddit= (dispatch, searchTerm, location)  => {
    dispatch({type: FETCH_DATA_REQUEST})
    axios.get(`https://www.reddit.com/r/${searchTerm}/new.json?sort=new`)
    .then(res=> {
        console.log("search:" , res)
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.data.children})
        dispatch({type: UPDATE_SHISTORY, payload: searchTerm})

    })
    .catch(err=> {
        console.log(err.message)
        dispatch({type: FETCH_DATA_ERROR, payload: err.message})
    })
}



// https://www.reddit.com/r/${searchTerm}/new.json?sort=new

// https://www.reddit.com/r/trend/new.json?sort=new

// https://www.reddit.com/subreddits/search.json?q=trend


