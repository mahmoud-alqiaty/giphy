import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {IoIosPaper} from 'react-icons/io'

export const Nav = styled.nav `
    width: 100%;
    height: 60px;
    padding: 0 30px;
    background-color: blue;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`
export const Logo = styled(Link) `
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    color: #fff;
`
export const NavList = styled.div `
    .active{
        color: #16f530;
    }

`
export const NavbarLink = styled(Link) `
    text-decoration: none;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    padding: 5px;
    margin-right: 20px;
    border-bottom: 2px solid transparent;
    transform: 0.2s;

    &&:hover{
        border-bottom: 2px solid #16f530 ;
    }
`

export const MenuIcon = styled(IoIosPaper) `
    font-size: 28px;
    color: #fff;
    cursor: pointer;
    display: ${({isSmallScreen})=> isSmallScreen? "block" : "none"} ;
`