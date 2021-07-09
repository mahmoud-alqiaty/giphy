import React, { useContext, useEffect, useState } from 'react'
import CardItem from '../../components/Card/CardItem'
import { stateContext } from '../../components/context/Context'
import { FetchTrendData } from '../../components/FetchingFunctions/FetchingFunctions'
import Loading from '../../components/Loading'
import { ShowContainer } from './GiphyStyle'

const Giphy = () => {

    const {loading, data, error, dispatch, showHistory, isSmallScreen, setIsSmallScreen} = useContext(stateContext)
    const [isDataChanged, setIsDataChanged] = useState(false)


    useEffect(() => {
        FetchTrendData(dispatch)
        setIsDataChanged(true)
    }, [])

    return (
        <>
        {
            loading ? <Loading /> :
            <ShowContainer isSmallScreen={isSmallScreen}>
               {
                error ? error :
                isDataChanged && data.map((item, i)=>
                    <CardItem 
                        key={i}
                        type={item.type} 
                        url={item.url} 
                        title={item.title? item.title : "oops!! No Title"} 
                        rating={item.rating} 
                        preview_gif={item.images.preview_gif.url}
                    />
                )}
            </ShowContainer>
        }
        </>
        
    )

}
export default Giphy
