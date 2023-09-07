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
      <Link to={'/trips'}>
        <button>All-trips</button>
        </Link>
        <br />
      <label htmlFor="name">Name</label>
      <input type="text" {...register('name')} />
      <br />
      <label htmlFor="destination">Destination</label>
      <input type="text" {...register('destination')} />
      <br />
      <label htmlFor="startDate">Start Date</label>
      <input type="text" {...register('startDate')} />
      <br />
      <label htmlFor="endDate">End Date</label>
      <input type="text" {...register('endDate')} />
      <br />
      <label htmlFor="description">Description</label>
      <input type="text" {...register('description')} />
      <br />
      <label htmlFor="price">Price</label>
      <input type="text" {...register('price')} />
      <br />
      <label htmlFor="image">Image</label>
      <input type="text" {...register('image')} />
      <br />
      <label htmlFor="activities">Activities</label>
      <input type="text" {...register('activities')} />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

