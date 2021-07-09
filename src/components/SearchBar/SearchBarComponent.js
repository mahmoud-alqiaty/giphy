import React, { useContext } from 'react'
import {BsSearch} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { stateContext } from '../context/Context'
import { fetchSearchedDatac, fetchSearchedReddit } from '../FetchingFunctions/FetchingFunctions'

export const SearchBar = styled.form `
    width: ${({width})=> width};
    display: ${({display})=> display};
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
`
export const SearchInput = styled.input `
    width: 80%;
    padding: 10px 15px;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
`
export const SearchIcon = styled(BsSearch) `
    width: 20%;
    color: #000;
    cursor: pointer;
    
`
const SearchBarComponent = ({width, display}) => {
    const {dispatch, searchTerm, setSearchTerm, showHistory, setShowHistory, isSmallScreen, setIsSmallScreen} = useContext(stateContext)

    const location = useLocation()

    const handleSubmit = (e)=>{
        e.preventDefault()
        location.pathname === "/" ?
        fetchSearchedDatac(dispatch, searchTerm, location) : 
        fetchSearchedReddit(dispatch, searchTerm, location)
        setSearchTerm("")
    }
    return (
        <SearchBar width={width} display={display} isSmallScreen={isSmallScreen} onSubmit={e=>handleSubmit(e)}>
            <SearchInput 
                type="text" 
                value={searchTerm} 
                placeholder="Search Trends"
                onChange={e=>setSearchTerm(e.target.value)} 
            />
            <SearchIcon onClick={e=>handleSubmit(e)} />
        </SearchBar>
    )
}

export default SearchBarComponent
