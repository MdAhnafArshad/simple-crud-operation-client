import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);


    const handleUserDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data?.deletedCount >0){
                alert('deleted successfully');
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <h2>{users.length}</h2>
            {
                users.map(res => <p 
                    key={res._id}> {res.name}: 
                    {res.email}
                    <Link to={`/update/${res._id}`}> 
                    <button>Update</button>
                    </Link> 
                    <button 
                    onClick={()=>handleUserDelete(res._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;