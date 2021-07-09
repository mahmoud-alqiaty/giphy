import styled from "styled-components";

export const CardContainer = styled.a `
    text-decoration: none;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px 10px 0 0;

    &&:hover{
        .title{
            opacity: 1;
        }
    }

`
export const CardImg = styled.img `
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0 ;
`
export const CardInfo = styled.div `
    width: 100%;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;

    .title{
        opacity: 0;
        font-weight: 500;
        letter-spacing: 3px;
        line-height: 1.2;
        padding: 10px;
        transition: 0.2s ease-in;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .type{
        background-color: red;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        margin-top: 10px;
        padding: 5px 0;
    }
`
export const CardRate = styled.div `
    height: 30px;
    padding: 2px 25px 2px 10px;
    overflow: visible;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;

    .rate-num{
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blue;
        border: 1px solid red;
        border-radius: 50%;
        position: absolute;
        right: -12px;
    }
    .rate-text{
        margin-right: 3px;
    }
`