import React from 'react'
import { Link } from 'react-router-dom'

const userItem = ({user:{login, avatar_url}}) => {
    
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avater">
                    <div className=" shadow h-16 w-16" >
                        <img src={avatar_url} alt="Avatar-img" style={imgStyle} />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link className='text-base-content text-opacity-40' to={`user/${login}`}>Check Profile</Link>
            </div>
        </div>
    </div>
  )
}

const imgStyle = {
    borderRadius: '50%'
}

export default userItem