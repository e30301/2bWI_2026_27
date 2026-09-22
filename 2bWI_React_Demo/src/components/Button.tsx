import React from 'react'

type Props = {
    function1: string;
    text: string;

}

export default function Card({ function1, text }: Props) {
  return (
    <button className="text-white w-40 h-15 bg-green-600 flex items-center justify-center cursor-pointer" onclick={function1} >
        {text}
    </button>
  )
}