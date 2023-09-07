import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>Home</div>
    <Link to={'/trips'}><button>All Trips</button></Link>
    <Link to={'/register'}><button>Register</button></Link>
    <Link to={'/login'}><button>Login</button></Link>
    </>
  )
}
