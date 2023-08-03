import React from "react";
import "./detail.css";
import { reScale } from "../brief/brief";
import { useState } from "react";
import { backScale } from "../brief/brief";
import Task from "../task/task";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/modifyTask";

function Detail({tasks, updateTask, addTask}) {
 

  let [isOpened, setOpened] = useState(false);

  function onOpen() {
    setOpened(true);
    setTimeout(() => {
      reScale();
    }, 0);
  }
  function onClose() {
    backScale();
    setTimeout(() => {
      setOpened(false);
    }, 1000);
    
  }
  return (
    <div id="detail">
      {!isOpened && <ExpandButton onOpen={onOpen}/>}
      {isOpened &&<TaskList tasks={tasks} updateTask = {updateTask} onClose={onClose} addTask={addTask} ></TaskList>}
    </div>
  );
}

export default Detail;



function ExpandButton ({onOpen}){
  return (
    <button onClick={onOpen} id="open-detail">
      OPEN TO SHOW MORE <br></br>{" "}
      <ion-icon name="chevron-down-outline"></ion-icon>
    </button>
  )
}


function TaskList ({ updateTask , onClose}){

  const allTasks = useSelector((state) => state);
  const dispatch = useDispatch();

  function demoAdd (){
    
    dispatch( addTask (
      { id : 11,
        detail: "Học TEC",
        time: "2023-07-22T10:16",
        status: true,
      }
    ))
  }
  return  (
    <div className="detail-tasks">
      <button className="on-close" onClick={onClose}>
        <ion-icon name="close-circle-outline"></ion-icon>
      </button>
      <button className="on-add" onClick={demoAdd}>
      <ion-icon name="add-circle-outline"></ion-icon>
      </button>
      <div className="tasks-cover">
      {allTasks.map((data) => {
        return <Task key = {data.id} data={data} updateTask={updateTask}></Task>;
      })}
      </div>
    </div>
  )
  
}