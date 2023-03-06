import React from 'react';
import Note from './Note';

function Notes(props) {
    return (
        <div className='note_body'>
            {props.notes.map((item)=>(
                <Note key={item.id} note={item} deleteNote={props.deleteNote}/>
            ))}
        </div>
    )
}

export default Notes;