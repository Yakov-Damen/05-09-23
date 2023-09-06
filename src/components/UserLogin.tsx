import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

export default function UserRegistration() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const updateFetch = async (body: FieldValues) => {
    const res = await fetch(`http://localhost:3000/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (res.ok) navigate(`/`)
    const resBody = await res.json()
    localStorage.setItem('token', resBody.responseObj.token)
    

  }

  return (
    <><Link to={'/'}><button>Home</button></Link>

      <form onSubmit={handleSubmit((data) => updateFetch(data))}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" {...register('email')} />
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password')} />
        </div>
        <button type='submit'>Submit</button>
      </form></>
  )
}