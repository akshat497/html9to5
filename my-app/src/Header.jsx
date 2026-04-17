
import { Link } from "react-router-dom";

export default function Header() {
  // remember data 
  // react to changes
  // run code at specific time 
  //share data
  //complex logic
  
    

  return (
    <>
      <div id="header">
        <Link to={"/about"}>About us</Link>
        <Link to={"/contact"}>Contact us</Link>
        <p>About us</p>
    
      </div>
    </>
  );
}
