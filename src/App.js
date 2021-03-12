import React from 'react'
import Grid from './Grid'

export default function App(props) {
    const [data,setData] = React.useState({
        winner : undefined,
        turn : 'cross',
        positions : new Array(9).fill(null)
    })
    console.log(data)
    return (<Grid 
        positions = {data.positions}
        setPositions={index =>{
            setData(prevData =>{
                if(!prevData.positions[index] && !prevData.winner){
                    const data = {...prevData}
                    data.positions[index] = data.turn
                    const lines = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                    ]
                    lines.forEach(line => {
                        const [a, b, c] = line
                        if (data.positions[a] &&
                            data.positions[a] === data.positions[b] &&
                            data.positions[a] === data.positions[c]){
                                data.winner=data.turn
                                console.log("positions of the winner : "+line)
                                alert(data.winner + " you are the winner")
                            }
                    })
                    data.turn = (data.turn==='cross') ? 'circle' : 'cross'
                    return data
                }
                else{
                    return prevData
                }
                
            })
        }
    }    
    />
    )
}