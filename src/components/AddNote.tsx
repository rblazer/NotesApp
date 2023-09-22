import { useState } from "react";

export default function AddNote({handleAddNote}: any) {
    const [noteText, setNoteText]  = useState("");

    const handleChange = (e: any) => {
        setNoteText(e.target.value);
    }

    const handleSaveClick = () => {
        handleAddNote(noteText);
    }

    return(
        <div className="note new">
            <textarea 
            rows={9} 
            cols={10} 
            placeholder='Type to add a note...'
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className ="note-footer">
                <small>200 remaining</small>
                <button 
                    className="save" 
                    onClick={handleSaveClick}
                    onKeyDown={event => event.key === 'Enter' ? handleSaveClick: ''}
                >Save</button>
            </div>
        </div>
    )
}