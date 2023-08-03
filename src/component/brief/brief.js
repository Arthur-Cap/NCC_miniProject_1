  import React from "react";
  import "./brief.css";
  import Task from "../task/task";
  import { useSelector } from "react-redux/es/hooks/useSelector";
  

  function Brief() {
    
    const taskss = useSelector((state) => state);

  //   let [data, setData] = useState(taskss[0]);

  //   useEffect(() => {
  //     setData(taskss[0]);
  // },[taskss]);

    return (
      <div id="brief">
        <div id="brief-left">
          <h1>TO DO APP</h1>
          <p>CARRER GUIDE</p>
          <div className="block-decorator">
            <div className="deco-block de1"></div>
            <div className="deco-block de2"></div>
            <div className="deco-block de3"></div>
          </div>
        </div>
        <div id="brief-right">
          <div className="short-noti-covered">
            <div className="short-noti">All : 10 </div>
            <div className="short-noti">Active : 3</div>
            <div className="short-noti">Done : 7 </div>
            <div className="short-noti">Over Time : 0</div>
          </div>
          <div className="nearest-task">
            <h1>Incoming Task</h1>
            {console.log("o day", taskss[0])}
            {taskss.length > 0 ? (
            <Task data={taskss[0]}></Task>
            ) : "You free today, boizzz"}
          </div>
        </div>
      </div>
    );
  }

  export default Brief;

  export function reScale() {
    const brief = document.querySelector("#brief");
    const nearestTask = document.querySelector(".nearest-task");
    const App = document.querySelector(".App");
    const briefLeft = document.querySelector("#brief-left");
    const briefRight = document.querySelector("#brief-right");
    const detailTasks = document.querySelector(".detail-tasks");
    if (brief) {
      // App.style.justifyContent = "start";

      brief.style.height = "110px";
      briefLeft.style.transform = "scale(0.6)";
      briefRight.style.transform = "scale(0.79)";
      detailTasks.style.height = "600px";
      brief.style.width = "80%";
      nearestTask.style.transform = "scale(0)";
      App.style.backgroundPosition = " center center";
    }
  }
  export function backScale() {
    const brief = document.querySelector("#brief");
    const nearestTask = document.querySelector(".nearest-task");
    const App = document.querySelector(".App");
    const briefLeft = document.querySelector("#brief-left");
    const briefRight = document.querySelector("#brief-right");
    const detailTasks = document.querySelector(".detail-tasks");
    if (brief) {
      // App.style.justifyContent = "start";
      brief.style.height = "auto";
      briefLeft.style.transform = "scale(1)";
      briefRight.style.transform = "scale(1)";
      detailTasks.style.height = "0";
      brief.style.width = "90%";
      nearestTask.style.transform = "scale(1)";
      App.style.backgroundPosition = " top center";
    }
  }