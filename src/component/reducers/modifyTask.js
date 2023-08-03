const modifyTasks = (tasks = [
    {
      id : 1,
      detail: "Lorem ipsum dolor sit amet, consectetur",
      time: "2023-07-22T10:16",
      status: false,
    },
    { id :2,
      detail: "Học HTML",
      time: "2023-07-22T10:16",
      status: true,
    },
    { id: 3,
      detail: "Học CSS",
      time: "2023-07-22T10:16",
      status: true,
    },
    { id : 4,
      detail: "Học JavaScript",
      time: "2023-07-22T10:16",
      status: false,
    },
    { id : 5,
      detail: "Học React JS",
      time: "2023-07-22T10:16",
      status: true,
    },
    { id : 6,
      detail: "Học AI",
      time: "2023-07-22T10:16",
      status: true,
    }
  ], action) => {
    switch (action.type) {
      case "ADDTASK":{
        return [...tasks,action.data]
      }
        
      case "UPDATETASK":
        return tasks.map(task => {
            if (task.id === action.data.id && task.status == null) {
              return null; 
            } else if (task.id === action.data.id) {
              return action.data;
            }
            return task;
          }).filter((task) => task !== null) 
    }
  };

  

  export default modifyTasks;