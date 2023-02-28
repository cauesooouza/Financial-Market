import React from "react"
import styles from "./Sidenav.module.scss"

export default function SideNav({ children }) {
    return (
        <div className={styles.sidenav}>
            {children}
        </div>
    )
}