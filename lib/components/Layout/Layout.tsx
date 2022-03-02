import { Container } from '@nextui-org/react'
import React from 'react'
import Navbar from '../Navbar'

const Layout: React.FC = ({ children }) => {
    return (
        <Container justify='center' alignContent='center'>
            <Navbar />
            <Container>
                {children}
            </Container>
        </Container>
    )
}

export default Layout