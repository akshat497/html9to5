import { Link } from "react-router-dom";

export default function Header(){





    return(
        <>
            <div id="header">
               
               <Link to={"/about"}>About us</Link>
                <Link to={"/contact"}>Contact us</Link>
                <p>About us</p>
                <input type="search"></input>
            </div>
        </>
    )
}

