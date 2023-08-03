import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import modifyTasks from "./component/reducers/modifyTask";
import { Provider } from "react-redux";
import { addTask } from "./component/actions/modifyTask";

export let taskStore = createStore(modifyTasks);
  

taskStore.dispatch(addTask( {
  id : 9,
  detail: "clm",
  time: "2023-07-22T10:16",
  status: false,
}));

console.log(taskStore.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={taskStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
