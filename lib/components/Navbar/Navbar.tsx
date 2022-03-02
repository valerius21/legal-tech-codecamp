import { Button, Col, Container, Row, Text } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <Container css={{ py: '1.5rem' }} id='navbar'>
            <Row gap={1} align='center'>
                <Col>
                    <Link href='/' passHref>
                        <Text h4 transform='lowercase' >
                            eLegal | Code_Camp
                        </Text>
                    </Link>
                </Col>
                <Button bordered color={'gradient'}>Anmelden</Button>
            </Row>
        </Container>
    )
}

export default Navbar