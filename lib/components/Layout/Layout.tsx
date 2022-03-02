import { Container } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../Navbar'
import { StickyNav } from 'react-js-stickynav'
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
    const { asPath: path } = useRouter()

    return (
        <div className={path == '/' ? styles.landing : ''}>
            <Container justify='center' alignContent='center'>
                <StickyNav length={40}>
                    <Navbar />
                </StickyNav>
                <Container>
                    {children}
                </Container>
            </Container>
        </div>
    )
}

export default Layout