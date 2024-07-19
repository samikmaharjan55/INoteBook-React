import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
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
  const deleteNote = (id) => {
    // TODO: API Call
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(
      `${host}/api/notes/updatenote/lknasdfuih38asd21398da`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyansclknwoilkjasdpo21oijadc093ufijsd0vueoijaoicj3890fucioadjc",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();

    // Logic to edit in client
    for (let index = 0; index < array.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
