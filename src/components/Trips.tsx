import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Trip } from './interface'

export default function Trips() {
    const [trips, setTrips] = useState<Trip[]>([])
    useEffect(() => {
        
        const getData = async () => {
            const res = await fetch('http://localhost:3000/api/trips')
            const data = await res.json()
            return data
        }
        getData()
            .then((trips) => setTrips(trips))
    }, [])

    
    const deleteTrip = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id: string) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/api/trips/${id}`,{
            method:'DELETE',
            headers:{
                authorization: 'test-token'
            }
        })
        if (res.ok) setTrips((prev) => prev.filter((trip) => trip.id !== id))
    }

    return (
        <>
            <Link to={'/'}><button>Home</button></Link>
            <Link to={'/new-trip'}><button>New trip</button></Link>
            <div>
                {trips.map(({ id, name, destination, startDate, endDate, image }) => {
                    return (
                        <Link to={`/trip-details/${id}`} key={id}><div key={id} id={id} >
                            <img src={image} alt={`${name} image`} />
                            <h2>{name}</h2>
                            <h3>{destination}</h3>
                            <p>Start date: {startDate} End date: {endDate}</p>
                            <button onClick={(e) => deleteTrip(e,id)}>Delete</button>
                        </div></Link>)
                })}
            </div>
        </>
    )
}
