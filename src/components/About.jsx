import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useEffect } from "react";

export default function About() {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      This is about {a.state.name} and he is in class {a.state.class}
    </div>
  );
}
