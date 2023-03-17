import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h4>signup to FB</h4>
      <input type="text" placeholder="name"name="name" />
      <input type="email" placeholder="emailaddress"name="name"id="" />
      <input type="number" placeholder="phonenumber"name="number"id="" />
      <input type="password" placeholder="password"name="name"id="" />
      <Typography variant='h3' color='primary'>signup to FB</Typography>
      <TextField label='email' variant='outlined' />
      <TextField label='name' type='name' varient='outlined'  />
      <TextField label='phonenumber' type='number' variant='outlined' />
      <TextField label='password' type='password' varient='outlined'  />
      


    </div>
  )
}

export default Signup
