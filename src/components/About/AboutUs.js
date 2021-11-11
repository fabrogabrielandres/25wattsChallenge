import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { AboutDescription, AboutImage, AboutWrapper, Container } from './styles'

export const AboutUs = () => {
    const [data, setData] = useState({})
    const fetchData = async () => {
        const responce = await axios.get("http://localhost:5000/about")
        setData(responce.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const {url,paragraph,subtitle,title} = data;

    return (
        <AboutWrapper id="About">
            <Container>
                <AboutImage>
                    <img src={url} alt=""/>
                </AboutImage>
                <AboutDescription>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <h3>{paragraph}</h3>
                    <Button
                    onClick={()=>alert("More Info")}
                    >
                        More Info
                    </Button>
                </AboutDescription>
            </Container>


        </AboutWrapper>

    )
}
