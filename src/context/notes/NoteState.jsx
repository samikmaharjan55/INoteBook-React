import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = { name: "Mika", class: "5" };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Samik",
        class: "10",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

// import React from "react";
// import NoteContext from "./NoteContext";
// import { useState } from "react";

// const NoteState = (props) => {
//   const notesInitial = [
//     {
//       _id: "asfghlkqwoicnaslkdjwoi",
//       user: "asdczxbjqwjinzxcuinwq",
//       title: "My Title",
//       description: "Please wake up early",
//       tag: "Personal",
//       date: "2024-07-17",
//       _v: "0",
//     },
//     {
//       _id: "123dfacascwasf",
//       user: "5462343fsdvevsdfe",
//       title: "My Title",
//       description: "Please wake up early",
//       tag: "Personal",
//       date: "2024-07-17",
//       _v: "0",
//     },
//   ];
//   const [notes, setNotes] = useState(notesInitial);

//   return (
//     <NoteContext.Provider value={{ notes, setNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   );
// };

// export default NoteState;

