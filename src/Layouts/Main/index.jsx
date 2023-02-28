import React from 'react'
import styles from './main.module.scss'

export default function Main({ children, direction }) {
    return (
        <main className={styles} style={{flexDirection:`${direction}`}}>
            {children}
        </main>
    )
}
