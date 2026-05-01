
export default function Header(props) {
 

    function logOut(){
        localStorage.removeItem("user");
        window.location.href="/"
    }
    
  return (
    <nav>
    <div>Logo</div>
      <div id='routes'>
          <div>contact</div>
        <div>about</div>
        <div>home</div>
        {
           props.user&&(
            <button onClick={logOut} style={{background:"red" ,padding:"2%", borderRadius:"10px", color:"white" ,fontWeight:"bolder"}}>Logout</button>
           )
        }
      </div>
    </nav>
  )
}
