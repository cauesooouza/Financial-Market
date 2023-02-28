import React from 'react'
import styles from './SocialMedia.module.scss'

export default function SocialMedia() {
    return (
        <div className={styles.social_medias}>
            <a href="https://www.linkedin.com/in/caue-souza-a1546245/" target='_blank' title='linkedin' rel="nofollow noreferrer">
                <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://github.com/cauesooouza" target='_blank' title='github' rel="nofollow noreferrer">
                <i className="devicon-github-original"></i>
            </a>
        </div>
    )
}
