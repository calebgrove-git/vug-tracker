import React, {useState} from 'react'
import './bugView.css'
import BugViewCard from './bugViewCard'
import {useDispatch} from 'react-redux'
import {markCompleted} from '../Reducers/bug'
import Priority from '../Reducers/priority'
import Edit from '../EditBug/edit'
import EditBug from '../BugCreate/bugForm'
import Bug from '../Model/bug'
export default (props)=>{
    const bug = new Bug(props.bug)
    const dispatch = useDispatch()
    const {level} = Priority(props.bug.priority)
    const [editBug, setEditBug] = useState(false)
    function edit(){
            setEditBug(!editBug)
    }
    function deletes(){

    }
    return(
        <>
        <div className='bug-view'>
            <Edit edit={edit} delete={deletes}></Edit>
            <button className='close' onClick={props.clicked}>Close</button>
            <h1>{props.bug.name}</h1>
            <BugViewCard title='Details' info={props.bug.details}/>
            <BugViewCard title='Steps' info={props.bug.steps}/>
            <BugViewCard title='Priority' info={level} />
            <BugViewCard title='Creator' info={props.bug.creator}/>
            <BugViewCard title='Version' info={props.bug.version}/>
            <BugViewCard title='Time' info={props.bug.time}/>
            <button onClick={()=>dispatch(markCompleted())}>Mark Complete</button>
        </div>
        {editBug && <EditBug title='Edit Bug' bug={bug} close={edit}/>}
        </>
    )
}