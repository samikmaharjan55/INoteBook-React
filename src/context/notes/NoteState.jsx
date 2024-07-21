import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // const notesInitial = [
  //   {
  //     id: "aenwaoiwenlaksjoiej",
  //     user: "1nf73uh08921nfakjn",
  //     title: "My Title",
  //     description: "Please wake up early",
  //     tag: "personal",
  //     date: "2024-07-18",
  //     __v: "0",
  //   },
  //   {
  //     id: "jkhafiuy389ascjn3",
  //     user: "234908ujonafdjkfe",
  //     title: "My Title",
  //     description: "Please wake up early",
  //     tag: "personal",
  //     date: "2024-07-18",
  //     __v: "0",
  //   },
  //   {
  //     id: "zxcdsfecsdvegsd",
  //     user: "234908ujonafdjkfe",
  //     title: "My Title",
  //     description: "Please wake up early",
  //     tag: "personal",
  //     date: "2024-07-18",
  //     __v: "0",
  //   },
  //   {
  //     id: "bscvewgrwhfgsdf",
  //     user: "234908ujonafdjkfe",
  //     title: "My Title",
  //     description: "Please wake up early",
  //     tag: "personal",
  //     date: "2024-07-18",
  //     __v: "0",
  //   },
  //   {
  //     id: "rtrsdvrhsdfyjik",
  //     user: "234908ujonafdjkfe",
  //     title: "My Title",
  //     description: "Please wake up early",
  //     tag: "personal",
  //     date: "2024-07-18",
  //     __v: "0",
  //   },
  // ];

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyansclknwoilkjasdpo21oijadc093ufijsd0vueoijaoicj3890fucioadjc",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyansclknwoilkjasdpo21oijadc093ufijsd0vueoijaoicj3890fucioadjc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    // const note = {
    //   id: Math.random(),
    //   user: "234908ujonafdjkfe",
    //   title: title,
    //   description: description,
    //   tag: "personal",
    //   date: "2024-07-18",
    //   __v: "0",
    // };
    // setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyansclknwoilkjasdpo21oijadc093ufijsd0vueoijaoicj3890fucioadjc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyansclknwoilkjasdpo21oijadc093ufijsd0vueoijaoicj3890fucioadjc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element.id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
