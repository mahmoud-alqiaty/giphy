import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { stateContext } from '../context/Context'
import { fetchSearchedDatac, fetchSearchedReddit } from '../FetchingFunctions/FetchingFunctions'
import SearchBarComponent from '../SearchBar/SearchBarComponent'
import { Nav, Logo, NavbarLink, NavList, SearchBar, SearchInput, SearchIcon, MenuIcon } from './NavbarStyle'


const Navbar = () => {
    const {dispatch, searchTerm, setSearchTerm, showHistory, setShowHistory, isSmallScreen, setIsSmallScreen} = useContext(stateContext)
    const location = useLocation()

    return (
        <Nav>
            <Logo to="/">giphy</Logo>
            <SearchBarComponent width="250px" display={isSmallScreen? "none" : "flex"} />
            <NavList>
                <NavbarLink to="/" className={location.pathname ==='/' && `active`}>Giphy</NavbarLink>
                <NavbarLink to="/reddit" className={location.pathname ==='/reddit' && `active`}>Reddit</NavbarLink>
            </NavList>
            <MenuIcon isSmallScreen={isSmallScreen} onClick={()=> setShowHistory(!showHistory)} />
        </Nav>
    )
}

export default Navbar
