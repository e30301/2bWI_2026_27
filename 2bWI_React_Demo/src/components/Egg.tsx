import React, { useState } from 'react'
import img from '../assets/580b57fbd9996e24bc43c108.png';
import styles from './Egg.module.css';

type Props = {}

export default function Egg({}: Props) {
  const top = Math.random() * (window.innerHeight - 60);
  const left = Math.random() * (window.innerWidth - 60);
  const [position, setPosition] = useState({ top: top, left: left });

  const handleClick = () => {
    const top = Math.random() * (window.innerHeight - 60);
    const left = Math.random() * (window.innerWidth - 60);
    
    setPosition({ top: top, left: left });
  };

  return (
    <img 
      src={img} 
      onClick={handleClick}
      className={styles.egg}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    />
  )
}
