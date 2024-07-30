'use client'
import React from 'react'

interface ViewUserPostProps{
  userId: number
}

const ViewUserPost: React.FC<ViewUserPostProps> = ({userId}) => {
    const handeleClick = ()=>{
        alert(`User Id: ${userId}`);
    }
  return (
    <div>
    <button onClick={handeleClick}>Click me</button>
    </div>
  );
}

export default ViewUserPost