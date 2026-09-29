
type Props = {
    listtext: string;
}

export default function Card({ listtext }: Props) {
  return (
    <div className="w-40 h-10 bg-1 text-white flex items-center justify-center">
        {listtext}
    </div>
  )
}