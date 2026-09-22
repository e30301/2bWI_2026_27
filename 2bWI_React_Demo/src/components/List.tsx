import React from 'react'
import ListItem from "./ListItem.tsx";

type Props = {
}

export default function List() {
  return (
    <div>
      <ListItem listtext="Coffee" />
      <ListItem listtext="Tea" />
      <ListItem listtext="Water" />
    </div>
  );
}