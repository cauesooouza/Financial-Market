import Nav from 'Components/Nav'
import Title from 'Components/Title'
import React from 'react'
import styles from './header.module.scss'

export default function Header() {

    return (
        <header className={styles.header}>
            <Nav />
            <Title />
        </header>
    )
}