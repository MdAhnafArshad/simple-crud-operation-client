import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const user = useLoaderData();
    console.log(user);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updateUser = {email, name};

        fetch(`http://localhost:5000/users/${user._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                alert('user updated successfully');
            }
        })
        

    }
    return (
        <div>
            Update pages : {user?.name}

            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={user?.name} />
                <br />
                <input type="email" name='email' defaultValue={user?.email} />
                <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Update;