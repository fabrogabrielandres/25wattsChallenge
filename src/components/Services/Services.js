import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IconsService, ServicesWrapper, SubTitleService, TitleService } from './styles'

export const Services = () => {

    const [data, setData] = useState({})
    const { title, subtitle, avatar } = data


    const fetch = async () => {
        const responce = await axios.get("http://localhost:5000/service")
        setData(responce.data);
        console.log(responce.data.avatar[3].url)
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
                {
                    avatar.map((avat) =>

                        <div>
                            <img src={avat.url} alt=""
                                style={{
                                    width: "120px",
                                    height: "120px"
                                }}
                            />
                        </div>
                    )

                }
            </IconsService> 






        </ServicesWrapper>
    )
}
