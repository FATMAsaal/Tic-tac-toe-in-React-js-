import React from 'react'
export default function Circle(props){
    const size = props.size || 100
    return(
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="14" cy="14.5" rx="14" ry="14.5" fill="#5F5151"/>
            </svg>

    )
}