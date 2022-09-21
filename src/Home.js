import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



export default function Home(){

    const[users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getUsers()
    },[])

const getUsers=()=>{
    fetch("https://62cbb3418042b16aa7c11c14.mockapi.io/users")
.then(data => data.json())
.then((user)=>setUsers(user.reverse()))
}

    return(
        <div className="home">

        
        <div className="container">
            <div className="py-4">
              <h1 className="text-center text-light">Users</h1>
             
              <table className="table table-light table-striped border shadow mt-4">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">email</th>
      <th scope="col">View</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>

     {
                users.map((use,index)=>(
                    <tr>
                       
                    <th scope="row">{index + 1}</th>
                    <td>{use.name}</td>
                    <td>{use.username}</td>
                    <td>{use.email}</td>
                    <td>
                          <IconButton
                          onClick={()=>{
                              navigate(`/${use.id}`)
                          }}
                           className="btn btn-primary me-2">
                          <VisibilityIcon color="secondary"/>
                          </IconButton>
                        
                        
                        </td>
                        <td>
                            
                                <IconButton onClick={()=>{
                                    navigate(`/edit-user/${use.id}`)
                                }}>
                                    <ModeEditIcon color="primary" />
                                </IconButton>
                            
                        
                        </td>
                        <td>
                                <IconButton
                                onClick={()=>{
                                   fetch(`https://62cbb3418042b16aa7c11c14.mockapi.io/users/${use.id}`,{method: "DELETE",})
                                   .then(()=>getUsers())
                                   
                               }}
                                >
                                   <DeleteIcon color="error" />
                                </IconButton>

                            
                        
                    </td>
                    </tr>
                ))
                    
              }
  </tbody>
</table>
            </div>
        </div>
        </div>
    )
}

