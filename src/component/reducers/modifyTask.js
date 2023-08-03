// const modifyTasks = (tasks = [
//     {
//       id : 1,
//       detail: "Lorem ipsum dolor sit amet, consectetur",
//       time: "2023-07-22T10:16",
//       status: false,
//     },
//     { id :2,
//       detail: "Học HTML",
//       time: "2023-07-22T10:16",
//       status: true,
//     },
//     { id: 3,
//       detail: "Học CSS",
//       time: "2023-07-22T10:16",
//       status: true,
//     },
//     { id : 4,
//       detail: "Học JavaScript",
//       time: "2023-07-22T10:16",
//       status: false,
//     },
//     { id : 5,
//       detail: "Học React JS",
//       time: "2023-07-22T10:16",
//       status: true,
//     },
//     { id : 6,
//       detail: "Học AI",
//       time: "2023-07-22T10:16",
//       status: true,
//     }
//   ], action) => {
//     switch (action.type) {
//       case "ADDTASK":{
//         return [...tasks,action.data]
//       }

//       case "UPDATETASK":
//         return tasks.map(task => {
//             if (task.id === action.data.id && task.status == null) {
//               return null;
//             } else if (task.id === action.data.id) {
//               return action.data;
//             }
//             return task;
//           }).filter((task) => task !== null)
//     }
//   };

//   export default modifyTasks;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "task",
  initialState: [
    {
      id: 1,
      detail: "Lorem ipsum dolor sit amet, consectetur",
      time: "2023-07-22T10:16",
      status: false,
    },
    { id: 2, detail: "Học HTML", time: "2023-07-22T10:16", status: true },
    { id: 3, detail: "Học CSS", time: "2023-07-22T10:16", status: true },
    {
      id: 4,
      detail: "Học JavaScript",
      time: "2023-07-22T10:16",
      status: false,
    },
    { id: 5, detail: "Học React JS", time: "2023-07-22T10:16", status: true },
    { id: 6, detail: "Học AI", time: "2023-07-22T10:16", status: true },
  ],
  reducers: {

    addTask: (tasks, action) => {
      console.log("đã thêm ")
      tasks.push(action.payload);
    },
    updateTask: (tasks, action) => {

        tasks = tasks
        .map((task) => {
          console.log("test1",task.id);
          if (task.id === action.payload.id && action.payload.status == null) {
            return null;
          } else if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        })
        .filter((task) => task !== null);
        
        console.log(tasks.forEach(task => console.log(task.detail)));
        
    },
  }
});
