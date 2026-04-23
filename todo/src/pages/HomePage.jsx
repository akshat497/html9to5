import React, { useContext } from "react";
import { userContext } from "../context/Context";

export default function HomePage({user}) {
         const {name, setName} = useContext(userContext)
  return (
    <div>
      <h2>Welcome {name} to your homepage</h2>
    </div>
  );
}
