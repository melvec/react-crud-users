import React, {useEffect, useState, useContext} from 'react';

import {GlobalContext} from '../context/GlobalState'
import {Link, useHistory} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id:'',
        name:''
    });
    const { users, editUser } =  useContext(GlobalContext);
    const history = useHistory();
    const currentUserID = props.match.params.id;
    
useEffect( ()=>{
const userID = currentUserID;
const selectedUser = users.find(user => user.id === userID)
setSelectedUser(selectedUser)

}, [currentUserID, users ])

    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/');
    }
    const onChange= (e) => {
       
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }
       
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>
                        Name
                </Label>
               <Input type="text" name="name" value={selectedUser.name}  onChange={onChange} placeholder="Enter name"></Input>
            </FormGroup>
            <Button type="submit">Edit user</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}


