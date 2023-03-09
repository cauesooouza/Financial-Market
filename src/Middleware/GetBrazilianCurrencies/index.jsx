import React, { useEffect, useState } from 'react'
import { gettingCurrency } from './gettingCurrency'
import styles from './GetBrazilianCurrencies.module.scss'
import { formatter } from 'Middleware/Formatter';
import Loading from 'Components/Loading';

export default function GetBrazilianCurrencies() {

  const [data, setData] = useState([]);

  useEffect(() => {
    gettingCurrency().then(response => setData(response))
  }, [setData])

  const settingStyle = () => {
    if(data.length === 0){
      return (`${styles.unloaded}`)
    } else {
      return (`${styles.currency}`)
    }
  }
  
  return (
    <ul className={settingStyle()}>
      {data.length === 0 ? <Loading /> : data.map((currency, index) => (
        <li key={index}>
          <p className={styles.__cod} title={`${currency.name.match(/.*(?=[/])/gi).slice(0, 1).join(" ")}`}>
            {currency.fromCurrency}
          </p>
          <p className={styles.__price}>
            {formatter.format(currency.bidPrice)}
          </p>
        </li>
      ))}
    </ul>
  )
}
