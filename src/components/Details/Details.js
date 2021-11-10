import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ContinerCards, DetailsCard, DetailsWrapper } from './styles'
import logo from "../../assets/anchor.svg"

export const Details = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const fetching = async () => {
        try {
            const responce = await axios.get("http://localhost:5000/details")
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
            <DetailsWrapper>
                <h1>More details</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</h2>
                <ContinerCards>
                    {
                        data.map((item, idx) => 
                            <DetailsCard>
                                <img src={item.url} alt=""/>
                                <p>{item.title}</p>
                            </DetailsCard>
                        )
                    }
                </ContinerCards>

            </DetailsWrapper>
        )
    } else {
        return (
            <p>cargando..</p>
        )
    }
}
