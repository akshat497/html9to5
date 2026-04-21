import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import { useState } from "react";

export default function App() {
  let name = "akshat";
  let age = 20;

  function add(a, b) {
    console.log(a + b);
  }
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  function addTask(task) {
    tasks.push(task);
    setTasks([...tasks]);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Todo tasks={tasks} setTasks={setTasks} addTask={addTask} />
            }
          />
          <Route
            path="/about"
            element={<AboutUs name={name} age={age} add={add} />}
          />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
