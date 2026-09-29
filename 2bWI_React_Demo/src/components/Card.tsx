import { generateMnemonic } from 'bip39';
import { useState } from 'react';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

type Props = {
  pname: string;
  occupation: string;
}

export default function Card({ pname, occupation }: Props) {
  let words = useState(() => generateMnemonic());
  return (
    <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition duration-300 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]">
      <img className="w-100%" src="https://picsum.photos/600/498" alt="avatar"></img>
      <div className="px-4 py-0.5">
        <h4><b>{pname}</b></h4> 
        <p>{occupation}</p>
          <p className="bg-1">{words}</p>
      </div>
    </div>
  )
}
