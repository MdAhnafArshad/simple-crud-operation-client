import './App.css'

function App() {



  const handleSubmit = event =>{
    event.preventDefault();

    //get to the form data with the user
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { 
      name, 
      email, 
      password,
    };
    console.log(user)


    // fetch the data 
    fetch('http://localhost:5000/users', {
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('added successfully user');
        form.reset();
      }
    })
    .catch()

    // form.reset();
  }

  return (
    <>
      
      <h1>Simple crud Operation</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='name'/>
          <br />
          <input type="email" name='email' placeholder='email'/>
          <br />
          <input type="password"  name='password'  placeholder='password'/>
          <br />
          <input type="submit" value='submit' />
        </form>
      </div>
    </>
  )
}

export default App
