import SocialMedia from 'Components/SocialMedia'
import Strip from 'Components/Strip'
import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles}>
            <Strip>
                <div className={styles.creator}>
                    © Developed by Cauê Souza
                </div>
                <div>
                    <SocialMedia />
                </div>
            </Strip>
        </footer>
    )
}
