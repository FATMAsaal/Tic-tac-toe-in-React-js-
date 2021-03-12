import React from 'react'
import styles from './grid.module.css'
import Circle from'./graphic/Circle'
import Cross from'./graphic/Cross'


const renderSVG = svg =>{
    if(svg=='cross'){
        return <Cross />
    }
    else if(svg=='circle'){
        return <Circle />
    }
    else{
        return null
    }
}

export default function Grid(props){
    const divisions = props.positions.map((value,index)=>{
        return(
            <div 
                key={index}
                onClick={() =>{  
                props.setPositions(index)
            }}>
            {renderSVG(value)}
            </div>
        )
    })
    return(
        <div className={styles.container}>
        {divisions}
        </div>


    )
}