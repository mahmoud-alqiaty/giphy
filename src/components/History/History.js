import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { stateContext } from '../context/Context'
import { CLEAR_FHISTORY, CLEAR_SHISTORY } from '../context/Reducers'
import { fetchSearchedDatac, fetchSearchedReddit } from '../FetchingFunctions/FetchingFunctions'
import SearchBarComponent from '../SearchBar/SearchBarComponent'
import { DeleteIcon, HistoryContainer, HistoryHeader, HistoryList } from './HistoryStyles'

const History = () => {
    const {dispatch, firstSiteHistory, secondSiteHistory, showHistory, setShowHistory, searchTerm, isSmallScreen, setIsSmallScreen} = useContext(stateContext)
    const location = useLocation()
    console.log(firstSiteHistory);

    const clearHistory = ()=>{
        if(location.pathname="/"){
            dispatch({type: CLEAR_FHISTORY})
        }else{
            dispatch({type: CLEAR_SHISTORY})
        }
    }

    const handleItemClick = (item)=>{
        location.pathname === "/" ?
        fetchSearchedDatac(dispatch, item, location) :
        fetchSearchedReddit(dispatch, item, location)
    }
    return (
        <HistoryContainer isSmallScreen={isSmallScreen} showHistory={showHistory} >
            <SearchBarComponent width="180px" display={isSmallScreen? "flex" : "none"} />
            <HistoryHeader>
                <h4>Search History</h4>
                <DeleteIcon onClick={clearHistory} />
            </HistoryHeader>
            <HistoryList>
                {
                    location.pathname === "/" ?
                    firstSiteHistory.map((item, i)=>
                        <div className="item" 
                            key={i}
                            itemValue={item}
                            onClick={()=>handleItemClick(item)}
                        >
                            {item}
                        </div>
                    ) :
                    secondSiteHistory.map((item, i)=>
                        <div className="item" 
                            key={i}
                            itemValue={item}
                            onClick={()=>handleItemClick(item)}
                        >
                            {item}
                        </div>
                    ) 
                }
            </HistoryList>
        </HistoryContainer>
    )
}

export default History
