import React, {useContext} from "react";
import { LoginContext } from "./App";

const SinglePost =()=>{
  const login =useContext(LoginContext);
  console.log(login);
  return(
    <h3>SinglePost</h3>
  )
};

export default SinglePost;