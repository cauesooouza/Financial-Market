import React from 'react'
import styles from './Strip.module.scss'

export default function Strip({children}) {
    return (
        <div className={styles.strip}>
            {children}
        </div>
    )
}
