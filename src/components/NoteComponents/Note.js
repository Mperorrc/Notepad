import React from 'react';

function Note(props) {
    
    const showDate=(val)=>{
        const date = new Date(val)
        let hrs=date.getHours()
        let min=date.getMinutes()
        let day=date.getDate()
        let monthnum=date.getMonth()
        if(hrs==0){
            hrs=12;
        }
        if(hrs>12){
            hrs=24-hrs;
        }
        if(min<10){
            min="0"+min;
        }
        const months=['January','February','March','April','May','June','July',
            'August','September','October','November','December']

        return `${hrs}:${min} ${months[monthnum]} ${day}`
    }
    
    return (
        <div className='note_element'style={{backgroundColor:props.note.color}}>
            <div className='note_element_head'>
                <textarea 
                    className='note_element_head_text'
                    placeholder='Subject'
                    maxLength='20'
                    defaultValue={props.note.subject}
                >

                </textarea>
            </div>
            <div className='note_element_body'>
                <textarea 
                    className='note_element_body_text'
                    placeholder='Content.....'
                    maxLength='600'
                    defaultValue={props.note.text}
                >
                    
                </textarea>
            </div>
            <div className='note_element_foot'>
                <div className='note_element_foot_date'>
                    {showDate(props.note.time)}
                </div>
                <div className='note_element_foot_btn'>
                    <button >Save</button>
                </div>
                <div className='note_element_foot_btn'>
                    <button onClick={()=>props.deleteNote(props.note.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Note;