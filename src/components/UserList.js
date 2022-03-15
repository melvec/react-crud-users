import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Link} from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
}
from 'reactstrap'

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
   
   
    return (
       <ListGroup className=" d-flex">
{users.length>0 ? (
<>
{users.map(user => (
            <ListGroupItem > 
              <div >
              <strong> {user.name} </strong> 
              <div className="ml-auto">
                <Link className='btn btn-warning' to={`/edit/${user.id}`}>Edit</Link>
                <Button onClick={()=>removeUser(user.id)} color="danger" className="ml-1">Delete</Button>
              </div> 
              </div>
                     
          </ListGroupItem>
           ))}
</>
): (
<h4 className='text-center'>No users </h4>
)}

          
          

       </ListGroup>
    )
}
