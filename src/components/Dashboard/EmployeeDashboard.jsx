import React from "react";
import Header from "../Header";
import TaskList from "../TaskList/TaskList";
import TaskNumberList from "../Others/TaskNumberList";
function EmployeeDashboard() {
  return (
    <div className="bg-[#1c1c1c] w-screen h-screen p-5">
      <Header />
      <TaskNumberList />
      <TaskList/>
    </div>
  );
}   

export default EmployeeDashboard;
