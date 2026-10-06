import { useState } from 'react';

type Props = {
    text: string;
}

export default function Card({ text }: Props) {
  const [count, setCount] = useState(0);

  return (
    <button 
      className="text-white w-40 h-15 bg-1 text-fg flex items-center justify-center cursor-pointer rounded-lg" 
      onClick={() => setCount(count + 1)}
    >
        {count}
    </button>
  )
}
