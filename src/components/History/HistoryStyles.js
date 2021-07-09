import styled from "styled-components";
import {RiDeleteBin2Fill} from "react-icons/ri";

export const HistoryContainer = styled.div `
    width: 200px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    position: fixed;
    top: 60px;
    right: ${({isSmallScreen, showHistory})=> isSmallScreen ? "-100%": "0"} ;
    background-color: bisque;
    z-index: 10;
`
export const HistoryHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: blue;

    h2{
        text-align: center;
    }
`

export const DeleteIcon = styled(RiDeleteBin2Fill) `
    cursor: pointer;
    font-size: 24px;
`

export const HistoryList = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column-reverse;
    .item{
        width: 100%;
        padding: 10px 15px;
        cursor: pointer;
        margin-bottom: 7px;
        background-color: #f1e7dd;
        font-weight: bold;
    }

    .item:hover{
        background-color: red;
        color: #fff;
    }
`