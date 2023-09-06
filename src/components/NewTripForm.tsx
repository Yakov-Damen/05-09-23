import { FieldValues, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

export default function NewTripForm() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const updateFetch = async (body: FieldValues) => {
    const res = await fetch(`http://localhost:3000/api/trips`, {
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

    <form onSubmit={handleSubmit((data) => {
      data.activities = data.activities.split(',')
      updateFetch(data)}
    )}>
      <h2>Create New Trip</h2>
      <Link to={'/trips'}><button>All-trips</button></Link>
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

