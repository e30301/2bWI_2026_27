import React from 'react'
import img from '../assets/580b57fbd9996e24bc43c108.png';
type Props = {}

export default function Egg({}: Props) {
  return (
    <div>
        <img src={img} className="w-10 h-15" />
    </div>
  )
}