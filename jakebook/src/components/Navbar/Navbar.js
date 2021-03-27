import React from 'react'
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const user = null;

  return (
    <nav>

      <Link className="app-name" to="/" >Jakebook</Link>

      <div className="login-container">
        {user ? (
          <div className="profile">
            <avatar className="avatar" src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</avatar>
            <h6 className="user-name">{user.result.name}</h6>
            <button className="logout-btn">Logout</button>
          </div>
        ):( 
          <Link className="login-btn"  to="/auth">Sign In</Link>
        )}
      </div>

    </nav>
  )
}

export default Navbar;
