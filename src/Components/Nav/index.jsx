import ALink from 'Components/ALink'
import React from 'react'
import styles from './Nav.module.scss'

export default function Nav() {
    return (
        <div className={styles.strip}>
            <div className={styles.__content}>
                <nav className={styles.nav_top}>
                    <ALink path='/'>
                        Home
                    </ALink>
                    <ALink path='/faq'>
                        FAQ
                    </ALink>
                    <ALink path='/contact'>
                        Contact
                    </ALink>
                </nav>
            </div>
        </div>
    )
}