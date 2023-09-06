import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

export default function UserRegistration() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const updateFetch = async (body: FieldValues) => {
    const res = await fetch(`http://localhost:3000/api/auth/register`, {
      method: 'POST',
      headers: {
        authorization: 'test-token',
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (res.ok) navigate(`/`)
  }

  return (
    <><Link to={'/'}><button>Home</button></Link>

      <form onSubmit={handleSubmit((data) => updateFetch(data))}>
        <h2>Registeration</h2>
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