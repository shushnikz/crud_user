import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ViewUser(){
    const {id} = useParams()

    const navigate = useNavigate()

   const[user,setUser]=useState({})

   useEffect(()=>{
    fetch(`https://62cbb3418042b16aa7c11c14.mockapi.io/users/${id}`,{method: "GET",})
    .then(data=>data.json())
    .then((use)=>setUser(use))
  },[id])

    return(
        <div className="container py-4">
      
      <h1 className="display-4">User Id : {id}</h1>
      <hr />
      <ul className="list-group w-50 py-4">
        <li className="list-group-item bg-light py-3">Name : {user.name}</li>
        <li className="list-group-item bg-light py-3">Username : {user.username}</li>
        <li className="list-group-item bg-light py-3">Email : {user.email}</li>
      </ul>
      <button
      onClick={()=> navigate(-1)}
       className="btn btn-primary mt-3" >
        <ArrowBackIosIcon />Back
      </button>
    </div>
  
    )
}