import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  let name="akshat";
  let age=20;


  function add(a,b){
    console.log(a+b)
  }

  
  return (
    <>
  

    <BrowserRouter>
      <Header/>
    <Routes>
    <Route path="/about" element={<AboutUs name={name} age={age} add={add}/>}/>
    <Route path="/contact" element={<ContactUs/>}/>

    </Routes>
 <Footer/>
    </BrowserRouter>
   
    
   

    </>
  );
}
