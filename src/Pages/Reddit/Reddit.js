import React, { useContext, useEffect, useState } from 'react'
import CardItem from '../../components/Card/CardItem'
import { stateContext } from '../../components/context/Context'
import { FetchTrendReddit } from '../../components/FetchingFunctions/FetchingFunctions'
import Loading from '../../components/Loading'
import { ShowContainer } from '../Giphy/GiphyStyle'
import notFound from '../../images/not-found.jpg'
import Error from '../../components/Error'

const Reddit = () => {
    const {loading, data, error, dispatch, showHistory, isSmallScreen, setIsSmallScreen} = useContext(stateContext)
    console.log(data);
    const [isDataChanged, setIsDataChanged] = useState(false)


    useEffect(() => {
        FetchTrendReddit(dispatch)
        setIsDataChanged(true)
    }, [])

    return (
        <>
        {
            loading ? <Loading /> :
            <ShowContainer isSmallScreen={isSmallScreen}>
                {
                     error ? <Error text={error} /> :
                    isDataChanged && data.map((item, i)=>
                    <CardItem 
                        key={i}
                        type="vedio"
                        url={item.data.url} 
                        title={item.data.title}
                        rating="top" 
                        preview_gif={
                            item.data.thumbnail? item.data.thumbnail :
                            (item.data.secure_media? 
                            (item.data.secure_media.oembed? 
                            (item.data.secure_media.oembed.thumbnail_url? 
                            item.data.secure_media.oembed.thumbnail_url : 
                            notFound)  : 
                            notFound ) : 
                            notFound)
                        }
                    />
                    )
                }
            </ShowContainer>
        }
        </>

    )

}

export default Reddit


