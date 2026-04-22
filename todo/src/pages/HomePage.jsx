import React from "react";

export default function HomePage({user}) {
 
  return (
    <div>
      <h2>Welcome {user.username} to your homepage</h2>
    </div>
  );
}
