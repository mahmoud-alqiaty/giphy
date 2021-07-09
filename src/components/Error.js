import React from 'react'
import styled from 'styled-components'
import errorImg from '../images/error.png'

const Container = styled.div `
    width: calc(100vw - 200px);
    height: 100vh;
    text-align: center;
`
const ErrorImg = styled.img `
    width: 300px;
    height: 300px;
    margin-bottom: 15px;
`

const Error = ({text}) => {
    return (
        <Container>
            <ErrorImg src={errorImg} />
            <h2>{text}</h2>
        </Container>
    )
}

export default Error
