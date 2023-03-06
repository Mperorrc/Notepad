import React, {useState} from "react";
import pic from '../Images/pl.jpg';

const Sidebar=(props)=>{
    const color = ['#fff','cyan','yellow','pink','#90ee90','#fe9b77']

    const [listOpen,setListOpen]=useState(false);

    return(
        <div className="sidebar_element">
            <img src={pic} abt="New Note" onClick={()=>setListOpen(!listOpen)}/>
            <ul className={`sidebar-options ${listOpen?"sidebar-options_active":""}`}>
                {color.map((item,index)=>(
                    <li
                        key={index}
                        className='dots'
                        style={{backgroundColor:item}}
                        onClick={()=>props.addNote(item)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;