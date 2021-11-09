import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { HeaderTitle, HeaderWrapper } from './styles'
import { Carousel } from 'react-responsive-carousel'
import axios from 'axios'
import "./slide.css"

export const Header = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetching()
    }, [])

    const fetching = async () => {
        try {
            const responce = await axios.get("http://localhost:5000/slider")
            setData(responce.data);
            console.log(responce.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Carousel className="main-slide" showArrows={true} onChange={onchange} onClickItem={onclick} >
            {
                data.map((dat, idx) => {
                    return (
                        <HeaderWrapper
                            imageBackground={dat.url}
                        >
                            <HeaderTitle>
                                <h3>{dat.title}</h3>
                            </HeaderTitle>                            
                        </HeaderWrapper>
                    )
                })
            }
        </Carousel>
    )
}
