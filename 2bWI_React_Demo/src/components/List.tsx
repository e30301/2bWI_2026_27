import ListItem from "./ListItem.tsx";

type Props = {
}

export default function List() {
  return (
    <div className="items-center">
      <ListItem listtext="Coffee" />
      <ListItem listtext="Tea" />
      <ListItem listtext="Water" />
    </div>
  );
}