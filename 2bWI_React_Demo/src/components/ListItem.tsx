import React from 'react'

type Props = {
    listtext: string;
}

export default function Card({ listtext }: Props) {
  return (
    <div className="w-40 h-10 bg-green-600">
        {listtext}
    </div>
  )
}