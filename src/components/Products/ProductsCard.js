import React from 'react'
import { CardWraaper } from './styles'

export const ProductsCard = ({item}) => {
    return (
        <CardWraaper>
            <h1>{item.title}</h1>
            <h2>{item.sub1}</h2>
            <h2>{item.sub2}</h2>
            <h2>{item.sub3}</h2>
            <h2>{item.sub4}</h2>            
        </CardWraaper>
    )
}
