import React from 'react'
import styled, { keyframes } from 'styled-components'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export const Container = styled.div `
    width: calc(100% - 200px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Anmi = keyframes `
   from{
    transform: rotate(0);
   }
   to{
    transform: rotate(360deg);
   }
`
const Icon = styled(AiOutlineLoading3Quarters) `
    font-size: 90px;
    color: #000;
    animation: ${Anmi} 3s infinite forwards;
`
const Loading = () => {
    return (
        <Container>
            <Icon />
        </Container>
    )
}

export default Loading
