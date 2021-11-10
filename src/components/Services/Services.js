import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IconsService, ServicesWrapper, SubTitleService, TitleService } from './styles'

export const Services = () => {
    const [data, setData] = useState({})
    const {title, subtitle,avatar} = data
    console.log(avatar);


    const fetch = async()=>{
        const responce = await axios.get("http://localhost:5000/service")
        setData(responce.data);
    }

    useEffect(() => {
        fetch()        
    }, [])

    return (
        <ServicesWrapper>
            <TitleService>
                <h1>
                    {title}
                </h1>
            </TitleService>
            <SubTitleService>
                <h2>
                    {subtitle}
                </h2>
            </SubTitleService>
            <IconsService>
                                
            </IconsService>

            
        </ServicesWrapper>
    )
}
