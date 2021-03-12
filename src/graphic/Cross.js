import React from 'react'
export default function Cross(props){
    const size = props.size || 100
    return(
       <svg width="31" height="41" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30.3963" y1="1.30486" x2="0.396311" y2="40.3049" stroke="black"/>
        <line x1="0.396312" y1="0.695145" x2="30.3963" y2="39.6951" stroke="black"/>
    </svg>
    )
}



