import styled from "styled-components";

export const ShowContainer = styled.div `
    width: ${({isSmallScreen})=> isSmallScreen? '100%' : 'calc(100% - 200px)' } ;
    min-height: 100vh;
    margin-top: 60px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    @media screen and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 450px){
        grid-template-columns: repeat(1, 1fr);
    }
`
export const Card = styled.div `
    padding: 20px;
    border-radius: 5px;
    box-shadow: 3px 3px #ddd;
`