import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='row'>
    <div className="col-md-4"></div>
    <div className="col-md-4 mt-5">
      <div className="card  mt-5">
        <div className="card-body">
            <h1 className='text-center'>Register</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className='form-control'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Email">Email:</label>
                <input
                  type="text"
                  id="Email"
                  className='form-control'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='my-3'>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                  <button type="submit" className='btn btn-success w-100'>Register</button>
                 
              </div>
              
              
              
            
            </form>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default RegisterPage;