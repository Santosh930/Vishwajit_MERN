import React from 'react';
import { useState } from 'react';

const LudoBoard = () => {
    const [moves,setMoves]=useState({red:0,blue:0,green:0,yellow:0});
    const handleBlueClick=()=>{
        setMoves((count)=>{
            return {...count,blue:count.blue+1}
        });
    };
    const handleRedClick=()=>{
        setMoves((count)=>{
            return {...count,red:count.red+1}
        });
    };
    const handleGreenClick=()=>{
        setMoves((count)=>{
            return {...count,green:count.green+1}
        });
    };
    const handleYellowClick=()=>{
        setMoves((count)=>{
            return {...count,yellow:count.yellow+1}
        });
    }
  return (
    <div className='text-center my-5'>
        <p>Game Begins!</p>
        <div className="board ">

        <p>Red Moves={moves.red}</p>
        <button onClick={handleRedClick} className='btn btn-danger my-2' >+1</button>
        <p>Blue Moves={moves.blue}</p>
        <button onClick={handleBlueClick} className='btn btn-primary my-2' >+1</button>
        <p>Green Moves={moves.green}</p>
        <button onClick={handleGreenClick} className='btn btn-success my-2'  >+1</button>
        <p>Yellow Moves={moves.yellow}</p>
        <button onClick={handleYellowClick} className='btn btn-warning my-2'  >+1</button>
        </div>
    </div>
  )
}

export default LudoBoard;