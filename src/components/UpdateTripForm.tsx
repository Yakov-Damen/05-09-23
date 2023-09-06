import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams, useNavigate, } from 'react-router-dom'
export default function UpdateTripForm() {

  const { id } = useParams()
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/api/trips/${id}`)
      const data = await res.json()
      return data
    }
    getData()
      .then(data => reset(data))
  }, [])

  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()

  const updateFetch = async (body: FieldValues) => {
    const res = await fetch(`http://localhost:3000/api/trips/${id}`, {
      method: 'PUT',
      headers: {
        authorization: 'test-token',
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (res.ok) navigate(`/trip-details/${id}`)
  }

  return (

    <form onSubmit={handleSubmit((data) => updateFetch(data)
    )}>
      <h2>Update Trip</h2>
      <label htmlFor="name">Name</label>
      <input type="text" {...register('name')} />
      <label htmlFor="destination">Destination</label>
      <input type="text" {...register('destination')} />
      <label htmlFor="startDate">Start Date</label>
      <input type="text" {...register('startDate')} />
      <label htmlFor="endDate">End Date</label>
      <input type="text" {...register('endDate')} />
      <label htmlFor="description">Description</label>
      <input type="text" {...register('description')} />
      <label htmlFor="price">Price</label>
      <input type="text" {...register('price')} />
      <label htmlFor="image">Image</label>
      <input type="text" {...register('image')} />
      <label htmlFor="activities">Activities</label>
      <input type="text" {...register('activities')} />
      <button type='submit'>Submit</button>
    </form>
  )
}
