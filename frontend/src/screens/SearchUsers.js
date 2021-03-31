import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { searchUsers } from '../actions/UserActions'
const SearchUsers = ({ match }) => {
    const dispatch = useDispatch()

    const keyword = match.params.keyword

    const userSearchProfile = useSelector(state => state.userSearchProfile)
    const { userSearch, loading, success } = userSearchProfile

    useEffect(() => {
        dispatch(searchUsers(keyword))
    }, [dispatch, keyword])


    return (
        <Container>
            {loading && <h1>Loading</h1>}
            {success && (userSearch.length === 0 ? (
                <h1>No users found!</h1>
            ) :
                (userSearch.map((user) => (
                    <Row className='my-2 py-1 border-bottom' key={user._id}>
                        <Col className='mr-3' xs={4} md={3} lg={3}>
                            <Image fluid roundedCircle src={user.profileImg}></Image>
                        </Col>

                        <Col xs={4} md={4} lg={4}>
                            <p><strong>{user.name}</strong></p>
                            <Link to={`/${user.username}`}><p>@{user.username}</p></Link>
                            <p><strong>Email: </strong>{user.email}</p>
                        </Col>

                        <Col className='mt-4' xs={3} md={3} lg={3}>
                            <Button variant='secondary'>Add friend</Button>
                        </Col>

                        <br />
                    </Row>
                ))))}

        </Container >
    )
}

export default SearchUsers
