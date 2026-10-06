type Props = { text: string; onClick: () => void };

export default function Button2({ text, onClick }: Props) {
  return (
    <button
      className="text-white w-40 h-15 bg-1 flex items-center justify-center cursor-pointer rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
}