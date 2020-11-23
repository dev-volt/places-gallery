import React from 'react'
import UserItem from './UserItem'
import './UserItem.css'

const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="text-center">
                No Users found.
            </div>
        )
    }
    else {
        return (
            <div className="card-columns">
                {
                    props.items.map((user) => (
                        <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
                    ))
                }
            </div>
        )
    }
}

export default UsersList
