import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      id: "aenwaoiwenlaksjoiej",
      user: "1nf73uh08921nfakjn",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-07-18",
      __v: "0",
    },
    {
      id: "jkhafiuy389ascjn3",
      user: "234908ujonafdjkfe",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-07-18",
      __v: "0",
    },
    {
      id: "zxcdsfecsdvegsd",
      user: "234908ujonafdjkfe",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-07-18",
      __v: "0",
    },
    {
      id: "bscvewgrwhfgsdf",
      user: "234908ujonafdjkfe",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-07-18",
      __v: "0",
    },
    {
      id: "rtrsdvrhsdfyjik",
      user: "234908ujonafdjkfe",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-07-18",
      __v: "0",
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    const note = {
      id: Math.random(),
      user: "234908ujonafdjkfe",
      title: title,
      description: description,
      tag: "personal",
      date: "2024-07-18",
      __v: "0",
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
