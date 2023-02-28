import React from 'react'
import styles from './main.module.scss'

export default function Main({ children }) {
    return (
        <main className={styles}>
            {children}
        </main>
    )
}
