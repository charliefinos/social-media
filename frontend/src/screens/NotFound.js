import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="mt-4">
            <h1>Error 404: Not Found!</h1>
            <Button variant="danger" className="mt-3"><Link to='/'>Go Home</Link></Button>
        </div>
    )
}

export default NotFound
