import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header  from "./components/Header";
import "./index.css";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  })


  const [searchText, setSearchText]  = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setDarkMode(true);
  }, [notes])

  const addNote = (text: string) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  }

  const deleteNote = (id: string) => {
      const newNotes = notes.filter((note: any) => note.id !== id)
      setNotes(newNotes);
  }

 return (<div className={`${darkMode && 'dark-mode'}`}>
  <div className='container'>
    <Header handleToggle={setDarkMode}></Header>
    <Search handleSearch={setSearchText}></Search>
    <NotesList notes={notes.filter((note: any) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  </div>
 </div>)
}