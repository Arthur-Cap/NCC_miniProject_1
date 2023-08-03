export const addTask = (newTask) => {
  return {
    type: "ADDTASK",
    data: newTask,
  };
};

export const updatedTask = (changedTask) => {
  return {
    type: "UPDATETASK",
    data: changedTask,
  };
};

