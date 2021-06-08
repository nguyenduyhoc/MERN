import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const About = () => {
    return (
        <Row className="mt-5" style={{ marginRight: '10px' }}>
            <Col className='text-center'>
                <Button variant='primary' href="https://www.youtube.com/" size='lg'>
                    Visit my channel for more tutorial
                </Button>
            </Col>
        </Row>
    )
}

export default About
