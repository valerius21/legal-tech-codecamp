import { Button, Col, Container, Row, Text } from '@nextui-org/react'
import React from 'react'

const Navbar = () => {
    return (
        <Container css={{ my: '1.5rem' }}>
            <Row gap={1} align='center'>
                <Col>
                    <Text h4 transform='lowercase' >
                        eLegal | Code_Camp
                    </Text>
                </Col>
                <Button bordered color={'gradient'}>Anmelden</Button>
            </Row>
        </Container>
    )
}

export default Navbar