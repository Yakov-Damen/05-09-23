import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Trip } from "./interface"
export default function TripDetail() {
    const { id } = useParams()
    const [trip, setTrip] = useState<Trip | null>(null)
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`http://localhost:3000/api/trips/${id}`)
            const data = await res.json()
            return data
        }
        getData()
            .then((trip) => setTrip(trip))
    }, [])

    return (
        <div>
            <Link to={'/trips'}><button>Back</button></Link>
            <Link to={`/update-trip/${id}`}><button>Update</button></Link>
            <img src={trip?.image} alt="" />
            <h1>{trip?.name}</h1>
            <h3>{trip?.destination}</h3>
            <h3>{trip?.description}</h3>
            <ul>{trip?.activities.map((action, i) => <li key={i}>{action}</li>)}</ul>
            <p>{`${trip?.price}$`}</p>
            <p>{trip?.startDate}</p>
            <p>{trip?.endDate}</p>
        </div>)
}
