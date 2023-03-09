import React, { useEffect, useState } from 'react'
import { requestInflation } from './requestInflation'
import styles from './Getinflation.module.scss'
import Loading from 'Components/Loading';

export default function GetInflation() {
    const [data, setData] = useState([]);

    useEffect(() => {
        requestInflation().then(response => setData(response))
    }, [setData])


    return (
        <div className={styles.inflation}>
            <h3>Inflation accumulated</h3>
            {data.length === 0 ? <Loading/> : data.map((e, index) => (
                <li key={index}>
                    <p>
                        {e.value}%
                    </p>
                    <p>
                        {e.date}
                    </p>
                    <p>last updated</p>
                </li>
            ))}
        </div>
    )
}
