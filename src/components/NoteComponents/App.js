import React ,{useState} from 'react';
import '../Css-files/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Notes from './Notes';
const App = () => {
    
    const [notes,setNotes] = useState([
        {
            id:Date.now(),
            subject:"",
            text:"Dsgfsgfs",
            time:Date.now(),
            color:"cyan"
        },
    ]);

    const addNote=(color)=>{
        const tempNotes=[...notes]      
        tempNotes.push({
            id:Date.now(),
            subject:"",
            text:"",
            time:Date.now(),
            color,
        })
        setNotes(tempNotes);
    }

    const deleteNote=(id)=>{
        const tempNotes=[...notes]
        const index=tempNotes.findIndex(item=>item.id===id)
        if(index<0){
            return
        }
        console.log(id,index,tempNotes);
        tempNotes.splice(index,1);
        setNotes(tempNotes);
    }

    return(
        <div className='container'>
            <div className='sidebar'>
                <Sidebar addNote={addNote} />
            </div>
            <div className='note_container'>
                <div className='head'>
                    <Header/>
                </div>
                <div>
                    <Notes notes={notes} deleteNote={deleteNote}/>
                </div>
            </div>
        </div>
    )
}

export default App;