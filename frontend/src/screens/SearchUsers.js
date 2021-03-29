import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchUsers = () => {
    return (
        <Container>
            <Row>
                <Col lg={2} md={3} sm={3} xs={3}>
                    <Image fluid roundedCircle src='https://blog.liquid.com/hubfs/vitalik.jpg' />
                </Col>
                <Col className="d-flex flex-column" lg={10} md={9} sm={9} xs={9}>
                    <Link to='/charliefinos'>charliefinos</Link>
                    <a><strong>Followers: </strong>2323</a>
                    <a><strong>Following: </strong></a>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchUsers
