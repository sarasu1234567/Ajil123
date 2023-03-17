import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>Login to FB</h3>
      <input type="text" placeholder="email address"name="" id="" />
      <input type="password"placeholder="password"name=""id=""/>
      <button type="submit">Login</button>
      <br></br>
      <br>
      </br>
      <Typography variant='h3' color='primary'>Login to FB</Typography>
      <TextField label='email' variant='outlined' />
      <TextField label='password' type='password' varient='filled' />
      
    </div>
  )
}

export default Login
