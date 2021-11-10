import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { ProductsCard } from './ProductsCard';
import { ProductsWrapper } from './styles'
import "./styles.css";

export const Products = () => {


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const fetching = async () => {
        try {
            const responce = await axios.get("http://localhost:5000/products")
            setData(responce.data)
            console.log(responce.data)
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetching()
    }, [])


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
    ];

    if (loading) {
        return(
            <ProductsWrapper>
                <h1>Products</h1>
                <h2>In eget tortor tempor mallis purus</h2>
                <Carousel breakPoints={breakPoints} pagination={false}
                disableArrowsOnEnd={true}
                focusOnSelect={true}                
                >
                    {data.map((item, idx) => (
                        <ProductsCard key={idx} item={item}/>
                    ))}
                </Carousel>
            </ProductsWrapper>
        )
    } else {
        return (
            <h2>cargando..</h2>
        )
    }

}
