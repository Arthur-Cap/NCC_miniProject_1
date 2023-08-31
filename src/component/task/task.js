import React from "react";
import "./task.css";
import { useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import modifyTask from "../reducers/modifyTask";


function Task( {data } ) {
  const dispatch = useDispatch ();
  console.log("aaaaaa",data.de);


  useEffect(() => {
    setTaskDetail(data.detail);
    setTaskStatus(data.status);
    setTaskTime(data.time);
    setTaskEdit(true);
    setEditIcon("create-outline");
},[data]);

  let [taskDetai, setTaskDetail] = useState(data.detail);
  let [taskStatus, setTaskStatus] = useState(data.status);
  let [taskTime, setTaskTime] = useState(data.time);
  let [taskEdit, setTaskEdit] = useState(true);
  let [editIcon, setEditIcon] = useState("create-outline");

  function deleteTask(){
    dispatch( modifyTask.actions.updateTask( {
      id: data.id,
      status : null
    }))
  }
  function updateRootTask(statusBut){
    let taskStatusFinal;
    if(statusBut==null){taskStatusFinal = taskStatus;}
    else{taskStatusFinal =statusBut}

    dispatch(modifyTask.actions.updateTask( 
      {
        id: data.id,
        detail: taskDetai,
        time: taskTime,
        status: taskStatusFinal,
      }
    ))

  }

  function handdleEditButton(){

    if(taskEdit){
      setTaskEdit(false);
      setEditIcon("checkbox-outline");
    }
    else{
      updateRootTask();
      setTaskEdit(true);
      setEditIcon("create-outline");
    }
  }


  return (
    <div className="task">

    <form>
    <div className="task-line1">
        <textarea
        disabled = {taskEdit}
          rows="4"
          cols="50"
          value={taskDetai}
          onChange={(e) => setTaskDetail(e.target.value)}
        ></textarea>
        <button className="edit-task" type = "button" onClick={e => handdleEditButton(e)} >
          <ion-icon name={editIcon}></ion-icon>
        </button>
      </div>

      <div className="task-line2">
        <input type="datetime-local" 
         disabled = {taskEdit}
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />
         <div className="status-button">
          <button type = "button" className={taskStatus?"isActive":"isNotActive"} onClick={() => {
            setTaskStatus(true)
            updateRootTask(true);
          }}>Active</button>
          <button type = "button" className={taskStatus?"isNotComplete":"isComplete"} onClick={() => {
            setTaskStatus(false)
            updateRootTask(false);
          }}>Complete</button>
          <button type = "button" className="delete" onClick={()=>{
            deleteTask();
            deleteTask();
          }}>Delete</button>
        </div>
      </div>
    </form>

    </div>
  );
}
export default Task;
