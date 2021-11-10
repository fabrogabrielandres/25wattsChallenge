import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardService, IconsService, ServicesWrapper, SubTitleService, TitleService } from './styles'

export const Services = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const fetching = async () => {
        try {
            const responce = await axios.get("http://localhost:5000/service")
            setData(responce.data);
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetching()
    }, [])

    if (loading) {

        return (
            <>
                <ServicesWrapper>
                    <TitleService>
                        <h1>
                            {data.title}
                        </h1>
                    </TitleService>
                    <SubTitleService>
                        <h2>
                            {data.subtitle}
                        </h2>
                    </SubTitleService>


                    <IconsService>
                    {
                        data.avatar.map((dat, idx) => {
                            return (
                                <CardService key={idx}>
                                        <img src={dat.url} alt=""/>
                                        <h1>{dat.texticons}</h1>
                                </CardService>
                            )
                        })
                    }
                    </IconsService>
                </ServicesWrapper>

            </>
        )

    } else {
        return (
            <p>cargando.......</p>
        )
    }

}
