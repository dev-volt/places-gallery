import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            "id": 1,
            "name": "Aditya Sawant",
            "username": "aditya",
            "image": "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp&&s=200",
            "places": 3
        },
        {
            "id": 2,
            "name": "Mahesh Kotal",
            "username": "mahesh",
            "image": "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp&&s=200",
            "places":4
        },
        {
            "id": 3,
            "name": "Swapnil Sawant",
            "username": "swapnil",
            "image": "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp&&s=200",
            "places": 2
        },
        {
            "id": 4,
            "name": "Kunal Tripathi",
            "username": "kunal",
            "image": "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp&&s=200",
            "places": 1
        },
        {
            "id": 5,
            "name": "Yash Deshmukh",
            "username": "yash",
            "image": "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp&&s=200",
            "places": 3
        },
    ]
    return (
        <div className="container mt-3">
            <div className="row">
                <UsersList items={USERS} />
            </div>
        </div>
    )
}

export default Users
