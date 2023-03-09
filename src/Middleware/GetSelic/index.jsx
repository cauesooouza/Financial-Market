import React, { useEffect, useState } from 'react'
import { requestSelic } from './requestSelic'
import styles from './Getselic.module.scss'
import Loading from 'Components/Loading'

export default function GetSelic() {
    const [data, setData] = useState([])

    useEffect(() => {
        requestSelic().then(response => setData(response))
    }, [setData])

    return (
        <div className={styles.prime_rate}>
            <h3>Prime rate</h3>
            {data.length === 0 ? <Loading/> : data.map((e, index) => (
                <li key={index}>
                    <p>
                        {e.value}
                    </p>
                    <p>
                        {e.date}
                    </p>
                    <p>
                        last updated
                    </p>
                </li>
            ))}</div>
    )
}
