import React, { useEffect, useState } from 'react'
import Main from 'Layouts/Main'
import Card from 'Components/Card'
import Content from 'Components/Content'
import SideNav from 'Components/Sidenav'
import GetInflation from 'Middleware/GetInflation'
import GetSelic from 'Middleware/GetSelic'
import styles from './Home.module.scss'
import { getAvailableStocks } from 'Middleware/GetStocks/GetAvailableStocks'
import ALink from 'Components/ALink'
import { Helmet } from 'react-helmet'


export default function Home() {
    const [stockData, setStockData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        getAvailableStocks().then(response => setStockData(response))
    }, [setStockData])

    return (
        <>
            <Helmet>
                <title>Financial Market</title>
            </Helmet>
            <Main>
                <Content>
                    <input type="search"
                        name="find_stock"
                        placeholder='Find your stock here...'
                        className={styles.search}
                        autoComplete='off'
                        onChange={e => { setSearchValue(e.target.value) }}
                    />
                    <div className={styles.stockFinded}>
                        {searchValue !== "" ? stockData.filter(stock => stock.match(new RegExp(searchValue, "i"))).map((findedStock, index) => (
                            <ALink key={index} path={`/${findedStock}`} color='#3f3f3f'>
                                <Card  >
                                    {findedStock}
                                </Card>
                            </ALink>
                        )) : null}
                    </div>
                </Content>
                <SideNav>
                    <Card>
                        <GetInflation />
                    </Card>
                    <Card>
                        <GetSelic />
                    </Card>
                </SideNav>
            </Main>
        </>
    )
}
