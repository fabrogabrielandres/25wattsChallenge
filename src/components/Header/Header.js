import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { HeaderWrapper } from './styles'
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
        <HeaderWrapper>
            <Carousel className="main-slide" showArrows={true} onChange={onchange} onClickItem={onclick} >
                {
                    data.map((dat,idx) => {
                        return (
                            <div key={idx}>
                                <img src={dat.url} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </HeaderWrapper>
    )
}
