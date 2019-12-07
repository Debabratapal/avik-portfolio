import React, { useState } from 'react';
import './Login.css';
import axios from '../../utils/axios';
import { Redirect } from "react-router-dom";

export const Login = (props) => {
  const [form, setValue] = useState({
    'username': '',
    'password': '',
  });
  const [redirect, setRedirect] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    axios.post('/auth/login', form)
    .then(res => {
      const data = res.data;
      if (data.status) {
        setRedirect(true);
      }
    })
  }

  const updateField = e => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

 
    return (
      <React.Fragment>
      <div className="form-container">
        <div className="login-form">
          <h2 className="header">Welcome!</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="formControl"
              name='username'
              autoComplete="false"
              value={form.username}
              placeholder="username"
              onChange={updateField} />
            <input
              type="password"
              className="formControl"
              value={form.password}
              autoComplete="false"
              name='password'
              placeholder="password"
              onChange={updateField} />
            <button>Login</button>
          </form>
        </div>
      </div>
      {redirect ? 
      <Redirect to={'/uploads'} />
      : null
      }
      </React.Fragment>
    )
  
}