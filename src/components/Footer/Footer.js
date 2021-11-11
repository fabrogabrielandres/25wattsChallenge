import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, FooterLeft, FooterMid, FooterRight, FooterWrapper, IconsContainer } from './styles'
import { Link } from "react-scroll";

export const Footer = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})

    const fetching = async () => {
        try {
            const responce = await axios.get("http://localhost:5000/footer")
            setData(responce.data);
            console.log(responce.data);
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
            <FooterWrapper id="Footer">
                <Container>
                    <FooterLeft>
                        <img src={data.left.url} alt="" />
                        <p>{data.left.title}</p>
                    </FooterLeft>
                    <FooterMid>
                        <Link to="About" smooth={true} duration={1000}>
                            <p>About</p>
                        </Link>
                        <Link to="Services" smooth={true} duration={1000}>
                            <p>Services</p>
                        </Link>
                        <Link to="Products" smooth={true} duration={1000}>
                            <p>Products</p>
                        </Link>
                        <Link to="Details" smooth={true} duration={1000}>
                            <p>Details</p>
                        </Link>
                        <Link to="Contac" smooth={true} duration={1000}>
                            <p>Contac</p>
                        </Link>
                    </FooterMid>
                    <FooterRight>
                        <p>Follow us</p>
                        <IconsContainer>
                            {
                                data.right.map((item, idx) => {
                                    return (
                                        <img src={item.url} alt="" key={idx} />
                                    )
                                })
                            }
                        </IconsContainer>
                    </FooterRight>
                </Container>
            </FooterWrapper>
        )
    } else {
        return (
            <h1>cargando..</h1>
        )
    }
}
